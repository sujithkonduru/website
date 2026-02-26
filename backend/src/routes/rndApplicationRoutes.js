const express = require('express');
const router = express.Router();
const rndApplicationController = require('../controllers/rndApplicationController');
const { validateRndApplication } = require('../middleware/validation');

router.post('/', validateRndApplication, rndApplicationController.submitApplication);
router.get('/', rndApplicationController.getAllApplications);
router.get('/:id', rndApplicationController.getApplicationById);
router.patch('/:id/status', rndApplicationController.updateApplicationStatus);
router.delete('/:id', rndApplicationController.deleteApplication);

module.exports = router;
