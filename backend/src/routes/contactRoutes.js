const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');

// Public routes
router.post('/', validateContact, ContactController.submitContact);

// Admin routes (add auth middleware in production)
router.get('/', ContactController.getAllContacts);
router.get('/:id', ContactController.getContactById);
router.patch('/:id/status', ContactController.updateContactStatus);

module.exports = router;
