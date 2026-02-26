const SchoolPartnershipModel = require('../models/schoolPartnershipModel');
const emailService = require('../utils/emailService');

const SchoolPartnershipController = {
  // Create new school partnership request
  createPartnership: async (req, res, next) => {
    try {
      const { schoolName, contactPerson, email } = req.body;

      // Create partnership request
      const partnershipId = await SchoolPartnershipModel.create(req.body);

      // Send confirmation email and admin notification with logging
      let userEmailResult = null;
      let adminEmailResult = null;
      try {
        userEmailResult = await emailService.sendSchoolPartnershipConfirmation({
          email,
          schoolName,
          contactPerson
        });
        console.log('School partnership confirmation email result:', userEmailResult);
      } catch (emailError) {
        console.error('School partnership confirmation email threw error:', emailError);
      }

      try {
        adminEmailResult = await emailService.sendAdminSchoolPartnershipNotification({
          schoolName,
          contactPerson,
          email,
          phone: req.body.phone || '',
          city: req.body.city || '',
          state: req.body.state || '',
          studentCount: req.body.studentCount || 0
        });
        console.log('School partnership admin notification email result:', adminEmailResult);
      } catch (adminEmailError) {
        console.error('School partnership admin notification email threw error:', adminEmailError);
      }

      res.status(201).json({
        success: true,
        message: userEmailResult && userEmailResult.success
          ? 'Partnership request submitted successfully! Confirmation email sent.'
          : 'Partnership request submitted successfully! Email delivery pending. Our team will contact you shortly.',
        partnershipId,
        emailStatus: {
          user: userEmailResult,
          admin: adminEmailResult
        }
      });
    } catch (error) {
      next(error);
    }
  },

  // Get all school partnership requests
  getAllPartnerships: async (req, res, next) => {
    try {
      const partnerships = await SchoolPartnershipModel.getAll();
      res.json({
        success: true,
        count: partnerships.length,
        partnerships
      });
    } catch (error) {
      next(error);
    }
  },

  // Get single partnership request
  getPartnership: async (req, res, next) => {
    try {
      const partnership = await SchoolPartnershipModel.getById(req.params.id);

      if (!partnership) {
        return res.status(404).json({
          success: false,
          message: 'Partnership request not found'
        });
      }

      res.json({
        success: true,
        partnership
      });
    } catch (error) {
      next(error);
    }
  },

  // Update partnership status
  updateStatus: async (req, res, next) => {
    try {
      const { status } = req.body;
      const updated = await SchoolPartnershipModel.updateStatus(req.params.id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Partnership request not found'
        });
      }

      res.json({
        success: true,
        message: 'Partnership status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete partnership request
  deletePartnership: async (req, res, next) => {
    try {
      const deleted = await SchoolPartnershipModel.delete(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Partnership request not found'
        });
      }

      res.json({
        success: true,
        message: 'Partnership request deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = SchoolPartnershipController;
