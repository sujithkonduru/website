const QueryModel = require('../models/queryModel');
const { sendEmail } = require('../utils/emailService');

class QueryController {
  // Submit query form
  static async submitQuery(req, res, next) {
    try {
      console.log('📋 Received query submission:', req.body);
      const { name, email, phone, subject, category, message } = req.body;

      // Create query submission
      console.log('💾 Creating query in database...');
      const queryId = await QueryModel.create({
        name,
        email,
        phone,
        subject,
        category,
        message
      });
      console.log('✅ Query created with ID:', queryId);

      // Send confirmation email to user
      await sendEmail({
        to: email,
        subject: 'Query Received - Stackenzo',
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for submitting your query to Stackenzo!</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Your Query:</strong></p>
          <p>${message}</p>
          <br>
          <p>Our team will review your query and get back to you within 24 hours.</p>
          <br>
          <p>Best regards,<br>Stackenzo Team</p>
        `
      });

      // Send notification to admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@stackenzo.com',
        subject: `New Query Submission - ${category}`,
        html: `
          <h2>New Query Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Query submitted successfully',
        data: { id: queryId }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all queries (admin)
  static async getAllQueries(req, res, next) {
    try {
      const { status, category, limit } = req.query;
      const queries = await QueryModel.getAll({ status, category, limit });

      res.json({
        success: true,
        count: queries.length,
        data: queries
      });
    } catch (error) {
      next(error);
    }
  }

  // Get query by ID (admin)
  static async getQueryById(req, res, next) {
    try {
      const { id } = req.params;
      const query = await QueryModel.getById(id);

      if (!query) {
        return res.status(404).json({
          success: false,
          message: 'Query not found'
        });
      }

      res.json({
        success: true,
        data: query
      });
    } catch (error) {
      next(error);
    }
  }

  // Update query status (admin)
  static async updateQueryStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await QueryModel.updateStatus(id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Query not found'
        });
      }

      res.json({
        success: true,
        message: 'Query status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = QueryController;
