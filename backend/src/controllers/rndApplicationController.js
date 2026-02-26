const rndApplicationModel = require('../models/rndApplicationModel');
const emailService = require('../utils/emailService');

const rndApplicationController = {
  submitApplication: async (req, res) => {
    try {
      const applicationData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        projectId: req.body.projectId || null,
        projectTitle: req.body.projectTitle || 'General Application',
        qualification: req.body.qualification,
        institution: req.body.institution,
        cgpa: req.body.cgpa,
        experience: req.body.experience || '',
        researchInterests: req.body.researchInterests,
        whyJoin: req.body.whyJoin,
        resumeUrl: req.body.resumeUrl || null
      };

      const applicationId = await rndApplicationModel.create(applicationData);

      // Send confirmation email
      try {
        await emailService.sendEmail(
          applicationData.email,
          'R&D Application Received - Stackenzo',
          `Dear ${applicationData.name},\n\nThank you for applying to our R&D program${applicationData.projectTitle !== 'General Application' ? ` for ${applicationData.projectTitle}` : ''}.\n\nWe have received your application and our team will review it shortly. We will contact you within 5-7 business days regarding the next steps.\n\nApplication Details:\n- Project: ${applicationData.projectTitle}\n- Qualification: ${applicationData.qualification}\n- Institution: ${applicationData.institution}\n\nBest regards,\nStackenzo R&D Team`
        );
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }

      res.status(201).json({
        success: true,
        message: 'Application submitted successfully',
        applicationId
      });
    } catch (error) {
      console.error('Error submitting R&D application:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to submit application'
      });
    }
  },

  getAllApplications: async (req, res) => {
    try {
      const applications = await rndApplicationModel.getAll();
      res.json({
        success: true,
        applications
      });
    } catch (error) {
      console.error('Error fetching applications:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch applications'
      });
    }
  },

  getApplicationById: async (req, res) => {
    try {
      const application = await rndApplicationModel.getById(req.params.id);
      if (!application) {
        return res.status(404).json({
          success: false,
          message: 'Application not found'
        });
      }
      res.json({
        success: true,
        application
      });
    } catch (error) {
      console.error('Error fetching application:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch application'
      });
    }
  },

  updateApplicationStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const updated = await rndApplicationModel.updateStatus(req.params.id, status);
      
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
      console.error('Error updating application status:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update application status'
      });
    }
  },

  deleteApplication: async (req, res) => {
    try {
      const deleted = await rndApplicationModel.delete(req.params.id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Application not found'
        });
      }

      res.json({
        success: true,
        message: 'Application deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting application:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete application'
      });
    }
  }
};

module.exports = rndApplicationController;
