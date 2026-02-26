const ProgramModel = require('../models/programModel');
const emailService = require('../utils/emailService');

const ProgramController = {
  // Get all programs
  getAllPrograms: async (req, res, next) => {
    try {
      const { type, status } = req.query;
      
      let programs;
      if (type && type !== 'all') {
        programs = await ProgramModel.getByType(type);
      } else if (status && status !== 'all') {
        programs = await ProgramModel.getByStatus(status);
      } else {
        programs = await ProgramModel.getAll();
      }

      res.json({
        success: true,
        count: programs.length,
        programs
      });
    } catch (error) {
      next(error);
    }
  },

  // Get single program
  getProgram: async (req, res, next) => {
    try {
      const program = await ProgramModel.getById(req.params.id);
      
      if (!program) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      res.json({
        success: true,
        program
      });
    } catch (error) {
      next(error);
    }
  },

  // Create program
  createProgram: async (req, res, next) => {
    try {
      const programId = await ProgramModel.create(req.body);
      
      res.status(201).json({
        success: true,
        message: 'Program created successfully',
        programId
      });
    } catch (error) {
      next(error);
    }
  },

  // Update program
  updateProgram: async (req, res, next) => {
    try {
      const updated = await ProgramModel.update(req.params.id, req.body);
      
      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      res.json({
        success: true,
        message: 'Program updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete program
  deleteProgram: async (req, res, next) => {
    try {
      const deleted = await ProgramModel.delete(req.params.id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      res.json({
        success: true,
        message: 'Program deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Register for program
  registerForProgram: async (req, res, next) => {
    try {
      const { programId, name, email, phone, message } = req.body;

      // Check if program exists
      const program = await ProgramModel.getById(programId);
      if (!program) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      // Register user
      const registrationId = await ProgramModel.registerUser(req.body);

      // Send confirmation email
      try {
        await emailService.sendEmail({
          to: email,
          subject: `Registration Confirmed - ${program.title}`,
          html: `
            <h2>Registration Confirmed!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for registering for <strong>${program.title}</strong>.</p>
            <h3>Program Details:</h3>
            <ul>
              <li><strong>Date:</strong> ${new Date(program.date).toLocaleDateString()}</li>
              <li><strong>Location:</strong> ${program.location}</li>
              <li><strong>Duration:</strong> ${program.duration}</li>
            </ul>
            <p>We will send you further details closer to the event date.</p>
            <p>Best regards,<br>Team Stackenzo</p>
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }

      res.status(201).json({
        success: true,
        message: 'Registration successful! Check your email for confirmation.',
        registrationId
      });
    } catch (error) {
      next(error);
    }
  },

  // Get registrations for a program
  getProgramRegistrations: async (req, res, next) => {
    try {
      const registrations = await ProgramModel.getRegistrations(req.params.id);
      
      res.json({
        success: true,
        count: registrations.length,
        registrations
      });
    } catch (error) {
      next(error);
    }
  },

  // Update registration status
  updateRegistrationStatus: async (req, res, next) => {
    try {
      const { status } = req.body;
      const updated = await ProgramModel.updateRegistrationStatus(req.params.id, status);
      
      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Registration not found'
        });
      }

      res.json({
        success: true,
        message: 'Registration status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = ProgramController;
