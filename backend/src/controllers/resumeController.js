const resumeModel = require('../models/resumeModel');
const { sendEmail } = require('../utils/emailService');

const submitResume = async (req, res) => {
  try {
    const { name, email, phone, position, experience, message } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'Resume file is required'
      });
    }

    if (file.mimetype !== 'application/pdf') {
      return res.status(400).json({
        success: false,
        message: 'Only PDF files are allowed'
      });
    }

    const resumeData = {
      name,
      email,
      phone,
      position: position || 'General Application',
      experience: experience || 'Not specified',
      resume_filename: file.originalname,
      resume_data: file.buffer,
      resume_mimetype: file.mimetype,
      message: message || ''
    };

    const resumeId = await resumeModel.createResume(resumeData);

    // Send confirmation email
    try {
      await sendEmail({
        to: email,
        subject: 'Resume Received - Stackenzo',
        html: `
          <h2>Thank You for Your Application!</h2>
          <p>Dear ${name},</p>
          <p>We have successfully received your resume. Our team will review it and get back to you soon.</p>
          <p><strong>Application Details:</strong></p>
          <ul>
            <li>Position: ${resumeData.position}</li>
            <li>Experience: ${resumeData.experience}</li>
            <li>Resume: ${file.originalname}</li>
          </ul>
          <p>Best regards,<br>Stackenzo Team</p>
        `
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Resume submitted successfully',
      data: { id: resumeId }
    });
  } catch (error) {
    console.error('Resume submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit resume'
    });
  }
};

const getAllResumes = async (req, res) => {
  try {
    const { status } = req.query;
    const resumes = await resumeModel.getAllResumes({ status });
    
    res.json({
      success: true,
      count: resumes.length,
      data: resumes
    });
  } catch (error) {
    console.error('Get resumes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resumes'
    });
  }
};

const downloadResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await resumeModel.getResumeById(id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    res.setHeader('Content-Type', resume.resume_mimetype);
    res.setHeader('Content-Disposition', `attachment; filename="${resume.resume_filename}"`);
    res.send(resume.resume_data);
  } catch (error) {
    console.error('Download resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to download resume'
    });
  }
};

const viewResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await resumeModel.getResumeById(id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    res.setHeader('Content-Type', resume.resume_mimetype);
    res.setHeader('Content-Disposition', `inline; filename="${resume.resume_filename}"`);
    res.send(resume.resume_data);
  } catch (error) {
    console.error('View resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to view resume'
    });
  }
};

const updateResumeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'reviewed', 'shortlisted', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    await resumeModel.updateResumeStatus(id, status);

    res.json({
      success: true,
      message: 'Resume status updated successfully'
    });
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update status'
    });
  }
};

module.exports = {
  submitResume,
  getAllResumes,
  downloadResume,
  viewResume,
  updateResumeStatus
};
