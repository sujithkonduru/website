const NewsletterModel = require('../models/newsletterModel');
const { sendEmail } = require('../utils/emailService');

class NewsletterController {
  // Subscribe to newsletter
  static async subscribe(req, res, next) {
    try {
      const { email } = req.body;

      await NewsletterModel.subscribe(email);

      // Send welcome email
      await sendEmail({
        to: email,
        subject: 'Welcome to Stackenzo Newsletter!',
        html: `
          <h2>Welcome to Stackenzo!</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll now receive updates about our latest programs, workshops, and technology insights.</p>
          <br>
          <p>Best regards,<br>Stackenzo Team</p>
          <p><small>To unsubscribe, click <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${email}">here</a></small></p>
        `
      });

      res.status(201).json({
        success: true,
        message: 'Successfully subscribed to newsletter'
      });
    } catch (error) {
      next(error);
    }
  }

  // Unsubscribe from newsletter
  static async unsubscribe(req, res, next) {
    try {
      const { email } = req.body;

      const unsubscribed = await NewsletterModel.unsubscribe(email);

      if (!unsubscribed) {
        return res.status(404).json({
          success: false,
          message: 'Email not found in subscribers list'
        });
      }

      res.json({
        success: true,
        message: 'Successfully unsubscribed from newsletter'
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all subscribers (admin)
  static async getAllSubscribers(req, res, next) {
    try {
      const { active } = req.query;
      const activeOnly = active !== 'false';
      
      const subscribers = await NewsletterModel.getAll(activeOnly);

      res.json({
        success: true,
        count: subscribers.length,
        data: subscribers
      });
    } catch (error) {
      next(error);
    }
  }

  // Get subscriber count (admin)
  static async getCount(req, res, next) {
    try {
      const count = await NewsletterModel.getCount();

      res.json({
        success: true,
        data: { count }
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = NewsletterController;
