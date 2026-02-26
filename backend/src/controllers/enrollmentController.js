const EnrollmentModel = require('../models/enrollmentModel');
const { sendEmail } = require('../utils/emailService');

class EnrollmentController {
  // Submit enrollment
  static async submitEnrollment(req, res, next) {
    try {
      const { name, email, phone, course, department, education, message, type } = req.body;

      const enrollmentId = await EnrollmentModel.create({
        name,
        email,
        phone,
        course,
        department,
        education,
        message,
        type
      });

      // Send confirmation email
      await sendEmail({
        to: email,
        subject: `Enrollment Confirmation - ${course}`,
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for your interest in <strong>${course}</strong>!</p>
          <p>We have received your enrollment request and our team will contact you within 24 hours.</p>
          <p><strong>Your Details:</strong></p>
          <ul>
            <li>Course: ${course}</li>
            <li>Education: ${education}</li>
            <li>Phone: ${phone}</li>
          </ul>
          <br>
          <p>Best regards,<br>Stackenzo Team</p>
        `
      });

      // Notify admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@stackenzo.com',
        subject: `New Enrollment - ${course}`,
        html: `
          <h2>New Enrollment Submission</h2>
          <p><strong>Type:</strong> ${type || 'enrollment'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Message:</strong> ${message || 'None'}</p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Enrollment submitted successfully',
        data: { id: enrollmentId }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all enrollments (admin)
  static async getAllEnrollments(req, res, next) {
    try {
      const { type, status, limit } = req.query;
      const enrollments = await EnrollmentModel.getAll({ type, status, limit });

      res.json({
        success: true,
        count: enrollments.length,
        data: enrollments
      });
    } catch (error) {
      next(error);
    }
  }

  // Get enrollment by ID (admin)
  static async getEnrollmentById(req, res, next) {
    try {
      const { id } = req.params;
      const enrollment = await EnrollmentModel.getById(id);

      if (!enrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      res.json({
        success: true,
        data: enrollment
      });
    } catch (error) {
      next(error);
    }
  }

  // Update enrollment status (admin)
  static async updateEnrollmentStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await EnrollmentModel.updateStatus(id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      res.json({
        success: true,
        message: 'Enrollment status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  // Get enrollment statistics (admin)
  static async getStats(req, res, next) {
    try {
      const stats = await EnrollmentModel.getStats();

      res.json({
        success: true,
        data: stats
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EnrollmentController;
