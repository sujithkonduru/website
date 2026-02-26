const { body, validationResult } = require('express-validator');

// Validation error handler
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

// Contact form validation
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  handleValidationErrors
];

// Enrollment validation
const validateEnrollment = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('course').trim().notEmpty().withMessage('Course is required'),
  body('education').isIn(['high-school', 'undergraduate', 'graduate', 'postgraduate', 'professional'])
    .withMessage('Valid education level required'),
  body('type').optional().isIn(['enrollment', 'workshop', 'internship', 'robotics']),
  handleValidationErrors
];

// Job application validation
const validateJobApplication = [
  body('job_id').isInt().withMessage('Valid job ID required'),
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('resume_url').optional().isURL().withMessage('Valid resume URL required'),
  handleValidationErrors
];

// Newsletter validation
const validateNewsletter = [
  body('email').isEmail().withMessage('Valid email is required'),
  handleValidationErrors
];

// Job posting validation (admin)
const validateJobPosting = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('department').trim().notEmpty().withMessage('Department is required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('type').isIn(['Full-time', 'Part-time', 'Contract', 'Internship']),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('requirements').isArray().withMessage('Requirements must be an array'),
  body('responsibilities').isArray().withMessage('Responsibilities must be an array'),
  handleValidationErrors
];

// R&D application validation
const validateRndApplication = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('qualification').trim().notEmpty().withMessage('Qualification is required'),
  body('institution').trim().notEmpty().withMessage('Institution is required'),
  body('cgpa').optional().isFloat({ min: 0, max: 10 }).withMessage('Valid CGPA required'),
  body('researchInterests').trim().notEmpty().withMessage('Research interests are required'),
  body('whyJoin').trim().notEmpty().withMessage('Please explain why you want to join'),
  handleValidationErrors
];

// Program registration validation
const validateProgramRegistration = [
  body('programId').isInt().withMessage('Valid program ID required'),
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('message').optional().trim(),
  handleValidationErrors
];

// Robotics enrollment validation
const validateRoboticsEnrollment = [
  body('studentName').trim().notEmpty().withMessage('Student name is required'),
  body('parentName').trim().notEmpty().withMessage('Parent/Guardian name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('studentClass').isIn(['6', '7', '8', '9']).withMessage('Valid class (6-9) required'),
  body('school').trim().notEmpty().withMessage('School name is required'),
  body('age').isInt({ min: 10, max: 16 }).withMessage('Valid age (10-16) required'),
  body('previousExperience').isIn(['yes', 'no']).withMessage('Previous experience must be yes or no'),
  body('message').optional().trim(),
  handleValidationErrors
];

// School partnership validation
const validateSchoolPartnership = [
  body('schoolName').trim().notEmpty().withMessage('School name is required'),
  body('schoolAddress').trim().notEmpty().withMessage('School address is required'),
  body('contactPerson').trim().notEmpty().withMessage('Contact person name is required'),
  body('designation').trim().notEmpty().withMessage('Designation is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('city').trim().notEmpty().withMessage('City is required'),
  body('state').trim().notEmpty().withMessage('State is required'),
  body('pincode').trim().notEmpty().withMessage('Pincode is required'),
  body('studentCount').isInt({ min: 1 }).withMessage('Valid student count required'),
  body('preferredStartDate').isISO8601().withMessage('Valid start date required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  handleValidationErrors
];

// Query form validation
const validateQuery = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('category').trim().notEmpty().withMessage('Category is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  handleValidationErrors
];

module.exports = {
  validateContact,
  validateEnrollment,
  validateJobApplication,
  validateNewsletter,
  validateJobPosting,
  validateRndApplication,
  validateProgramRegistration,
  validateRoboticsEnrollment,
  validateSchoolPartnership,
  validateQuery
};
