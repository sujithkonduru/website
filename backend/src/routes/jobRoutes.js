const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobController');
const { validateJobApplication, validateJobPosting } = require('../middleware/validation');

// Public routes
router.get('/postings', JobController.getAllJobs);
router.get('/postings/:id', JobController.getJobById);
router.post('/applications', validateJobApplication, JobController.submitApplication);

// Admin routes (add auth middleware in production)
router.post('/postings', validateJobPosting, JobController.createJob);
router.get('/applications', JobController.getAllApplications);
router.patch('/applications/:id/status', JobController.updateApplicationStatus);

module.exports = router;
