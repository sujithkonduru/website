const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/quoteController');
const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

const validateQuote = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('company').trim().notEmpty().withMessage('Company name is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('message').optional().trim(),
  handleValidationErrors
];

// Public routes
router.post('/', validateQuote, QuoteController.submitQuote);

// Admin routes
router.get('/', QuoteController.getAllQuotes);
router.get('/:id', QuoteController.getQuoteById);
router.patch('/:id/status', QuoteController.updateQuoteStatus);

module.exports = router;
