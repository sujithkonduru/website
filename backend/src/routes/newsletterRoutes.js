const express = require('express');
const router = express.Router();
const NewsletterController = require('../controllers/newsletterController');
const { validateNewsletter } = require('../middleware/validation');

// Public routes
router.post('/subscribe', validateNewsletter, NewsletterController.subscribe);
router.post('/unsubscribe', validateNewsletter, NewsletterController.unsubscribe);

// Admin routes (add auth middleware in production)
router.get('/subscribers', NewsletterController.getAllSubscribers);
router.get('/count', NewsletterController.getCount);

module.exports = router;
