const QuoteModel = require('../models/quoteModel');
const { sendEmail } = require('../utils/emailService');

class QuoteController {
  static async submitQuote(req, res, next) {
    try {
      const { name, email, phone, company, service, message } = req.body;

      const quoteId = await QuoteModel.create({
        name,
        email,
        phone,
        company,
        service,
        message
      });

      // Send confirmation email to customer
      await sendEmail({
        to: email,
        subject: 'Quote Request Received - Stackenzo',
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for requesting a quote from Stackenzo!</p>
          <p>We have received your request for <strong>${service}</strong> services.</p>
          <p><strong>Your Details:</strong></p>
          <ul>
            <li>Company: ${company}</li>
            <li>Service: ${service}</li>
            <li>Phone: ${phone}</li>
          </ul>
          <p>Our team will review your requirements and contact you within 24 hours with a detailed quote.</p>
          <br>
          <p>Best regards,<br>Stackenzo Team</p>
        `
      });

      // Notify admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@stackenzo.com',
        subject: `New Quote Request - ${service}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message || 'None'}</p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Quote request submitted successfully',
        data: { id: quoteId }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllQuotes(req, res, next) {
    try {
      const { status, limit } = req.query;
      const quotes = await QuoteModel.getAll({ status, limit });

      res.json({
        success: true,
        count: quotes.length,
        data: quotes
      });
    } catch (error) {
      next(error);
    }
  }

  static async getQuoteById(req, res, next) {
    try {
      const { id } = req.params;
      const quote = await QuoteModel.getById(id);

      if (!quote) {
        return res.status(404).json({
          success: false,
          message: 'Quote not found'
        });
      }

      res.json({
        success: true,
        data: quote
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateQuoteStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await QuoteModel.updateStatus(id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Quote not found'
        });
      }

      res.json({
        success: true,
        message: 'Quote status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = QuoteController;
