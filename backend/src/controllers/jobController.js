const JobModel = require('../models/jobModel');
const { sendEmail } = require('../utils/emailService');

class JobController {
  // Get all job postings
  static async getAllJobs(req, res, next) {
    try {
      const { department } = req.query;
      const jobs = await JobModel.getAllPostings({ department });

      res.json({
        success: true,
        count: jobs.length,
        data: jobs
      });
    } catch (error) {
      next(error);
    }
  }

  // Get job by ID
  static async getJobById(req, res, next) {
    try {
      const { id } = req.params;
      const job = await JobModel.getPostingById(id);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: 'Job not found'
        });
      }

      res.json({
        success: true,
        data: job
      });
    } catch (error) {
      next(error);
    }
  }

  // Create job posting (admin)
  static async createJob(req, res, next) {
    try {
      const jobData = req.body;
      const jobId = await JobModel.createPosting(jobData);

      res.status(201).json({
        success: true,
        message: 'Job posting created successfully',
        data: { id: jobId }
      });
    } catch (error) {
      next(error);
    }
  }

  // Submit job application
  static async submitApplication(req, res, next) {
    try {
      const { job_id, name, email, phone, resume_url, cover_letter } = req.body;

      const applicationId = await JobModel.createApplication({
        job_id,
        name,
        email,
        phone,
        resume_url,
        cover_letter
      });

      // Get job details
      const job = await JobModel.getPostingById(job_id);

      // Send confirmation email
      await sendEmail({
        to: email,
        subject: `Application Received - ${job.title}`,
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for applying for the <strong>${job.title}</strong> position at Stackenzo!</p>
          <p>We have received your application and our HR team will review it shortly.</p>
          <p>We'll get back to you within 5-7 business days.</p>
          <br>
          <p>Best regards,<br>Stackenzo HR Team</p>
        `
      });

      // Notify admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@stackenzo.com',
        subject: `New Job Application - ${job.title}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${job.title}</p>
          <p><strong>Department:</strong> ${job.department}</p>
          <p><strong>Applicant:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Resume:</strong> ${resume_url || 'Not provided'}</p>
          <p><strong>Cover Letter:</strong></p>
          <p>${cover_letter || 'Not provided'}</p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Application submitted successfully',
        data: { id: applicationId }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all applications (admin)
  static async getAllApplications(req, res, next) {
    try {
      const { job_id, status } = req.query;
      const applications = await JobModel.getAllApplications({ job_id, status });

      res.json({
        success: true,
        count: applications.length,
        data: applications
      });
    } catch (error) {
      next(error);
    }
  }

  // Update application status (admin)
  static async updateApplicationStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await JobModel.updateApplicationStatus(id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Application not found'
        });
      }

      res.json({
        success: true,
        message: 'Application status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = JobController;
