const express = require('express');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const resumeController = require('../controllers/resumeController');

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
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

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Validation rules
const resumeValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('position').optional().trim(),
  body('experience').optional().trim(),
  body('message').optional().trim()
];

// Public routes
router.post('/submit', upload.single('resume'), resumeValidation, validate, resumeController.submitResume);

// Admin routes
router.get('/', resumeController.getAllResumes);
router.get('/:id/view', resumeController.viewResume);
router.get('/:id/download', resumeController.downloadResume);
router.patch('/:id/status', resumeController.updateResumeStatus);

module.exports = router;
