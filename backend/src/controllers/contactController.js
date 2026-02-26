const ContactModel = require('../models/contactModel');
const { sendEmail } = require('../utils/emailService');

class ContactController {
  // Submit contact form
  static async submitContact(req, res, next) {
    try {
      const { name, email, phone, subject, message } = req.body;

      // Create contact submission
      const contactId = await ContactModel.create({
        name,
        email,
        phone,
        subject,
        message
      });

      // Send confirmation email to user
      await sendEmail({
        to: email,
        subject: 'Thank you for contacting Stackenzo',
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,<br>Stackenzo Team</p>
        `
      });

      // Send notification to admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@stackenzo.com',
        subject: `New Contact Form Submission - ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: { id: contactId }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all contacts (admin)
  static async getAllContacts(req, res, next) {
    try {
      const { status, limit } = req.query;
      const contacts = await ContactModel.getAll({ status, limit });

      res.json({
        success: true,
        count: contacts.length,
        data: contacts
      });
    } catch (error) {
      next(error);
    }
  }

  // Get contact by ID (admin)
  static async getContactById(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await ContactModel.getById(id);

      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.json({
        success: true,
        data: contact
      });
    } catch (error) {
      next(error);
    }
  }

  // Update contact status (admin)
  static async updateContactStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await ContactModel.updateStatus(id, status);

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.json({
        success: true,
        message: 'Contact status updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ContactController;
