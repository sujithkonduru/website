const express = require('express');
const router = express.Router();
const SchoolPartnershipController = require('../controllers/schoolPartnershipController');
const { validateSchoolPartnership } = require('../middleware/validation');

// Public routes
router.post('/', validateSchoolPartnership, SchoolPartnershipController.createPartnership);

// Admin routes
router.get('/', SchoolPartnershipController.getAllPartnerships);
router.get('/:id', SchoolPartnershipController.getPartnership);
router.patch('/:id/status', SchoolPartnershipController.updateStatus);
router.delete('/:id', SchoolPartnershipController.deletePartnership);

module.exports = router;
