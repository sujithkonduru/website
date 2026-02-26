const express = require('express');
const router = express.Router();
const RoboticsEnrollmentController = require('../controllers/roboticsEnrollmentController');
const { validateRoboticsEnrollment } = require('../middleware/validation');

// Public routes
router.post('/', validateRoboticsEnrollment, RoboticsEnrollmentController.createEnrollment);

// Admin routes
router.get('/', RoboticsEnrollmentController.getAllEnrollments);
router.get('/:id', RoboticsEnrollmentController.getEnrollment);
router.patch('/:id/status', RoboticsEnrollmentController.updateStatus);
router.delete('/:id', RoboticsEnrollmentController.deleteEnrollment);

module.exports = router;
