const RoboticsEnrollmentModel = require('../models/roboticsEnrollmentModel');
const emailService = require('../utils/emailService');

const RoboticsEnrollmentController = {
  // Create new enrollment
  createEnrollment: async (req, res, next) => {
    try {
      const { studentName, parentName, email, studentClass } = req.body;

      // Create enrollment
      const enrollmentId = await RoboticsEnrollmentModel.create(req.body);

      // Send confirmation email and admin notification with logging
      let userEmailResult = null;
      let adminEmailResult = null;
      try {
        userEmailResult = await emailService.sendEnrollmentConfirmation({
          email,
          studentName,
          className: studentClass,
          parentName
        });
        console.log('Robotics enrollment confirmation email result:', userEmailResult);
      } catch (emailError) {
        console.error('Robotics enrollment confirmation email threw error:', emailError);
      }

      try {
        adminEmailResult = await emailService.sendAdminNotification({
          studentName,
          parentName,
          email,
          phone: req.body.phone || req.body.parentPhone || '',
          studentClass,
          school: req.body.school || ''
        });
        console.log('Robotics admin notification email result:', adminEmailResult);
      } catch (adminEmailError) {
        console.error('Robotics admin notification email threw error:', adminEmailError);
      }

      res.status(201).json({
        success: true,
        message: userEmailResult && userEmailResult.success
          ? 'Enrollment successful! Confirmation email sent.'
          : 'Enrollment successful! Email delivery pending. Our team will contact you shortly.',
        enrollmentId,
        emailStatus: {
          user: userEmailResult,
          admin: adminEmailResult
        }
      });
    } catch (error) {
      next(error);
    }
  },

  // Get all enrollments
  getAllEnrollments: async (req, res, next) => {
    try {
      const enrollments = await RoboticsEnrollmentModel.getAll();
      res.json({
        success: true,
        count: enrollments.length,
        enrollments
      });
    } catch (error) {
      next(error);
    }
  },

  // Get single enrollment
  getEnrollment: async (req, res, next) => {
    try {
      const enrollment = await RoboticsEnrollmentModel.getById(req.params.id);
      
      if (!enrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      res.json({
        success: true,
        enrollment
      });
    } catch (error) {
      next(error);
    }
  },

  // Update enrollment status
  updateStatus: async (req, res, next) => {
    try {
      const { status } = req.body;
      const updated = await RoboticsEnrollmentModel.updateStatus(req.params.id, status);
      
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
  },

  // Delete enrollment
  deleteEnrollment: async (req, res, next) => {
    try {
      const deleted = await RoboticsEnrollmentModel.delete(req.params.id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      res.json({
        success: true,
        message: 'Enrollment deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = RoboticsEnrollmentController;
