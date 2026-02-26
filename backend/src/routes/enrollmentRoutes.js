const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/enrollmentController');
const { validateEnrollment } = require('../middleware/validation');

// Public routes
router.post('/', validateEnrollment, EnrollmentController.submitEnrollment);

// Admin routes (add auth middleware in production)
router.get('/', EnrollmentController.getAllEnrollments);
router.get('/stats', EnrollmentController.getStats);
router.get('/:id', EnrollmentController.getEnrollmentById);
router.patch('/:id/status', EnrollmentController.updateEnrollmentStatus);

module.exports = router;
