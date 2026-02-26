const express = require('express');
const router = express.Router();
const ProgramController = require('../controllers/programController');
const { validateProgramRegistration } = require('../middleware/validation');

// Public routes
router.get('/', ProgramController.getAllPrograms);
router.get('/:id', ProgramController.getProgram);
router.post('/register', validateProgramRegistration, ProgramController.registerForProgram);

// Admin routes (add authentication middleware later)
router.post('/', ProgramController.createProgram);
router.put('/:id', ProgramController.updateProgram);
router.delete('/:id', ProgramController.deleteProgram);
router.get('/:id/registrations', ProgramController.getProgramRegistrations);
router.patch('/registrations/:id/status', ProgramController.updateRegistrationStatus);

module.exports = router;
