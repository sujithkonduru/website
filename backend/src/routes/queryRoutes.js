const express = require('express');
const router = express.Router();
const QueryController = require('../controllers/queryController');
const { validateQuery } = require('../middleware/validation');

// Public routes
router.post('/', validateQuery, QueryController.submitQuery);

// Admin routes (add auth middleware in production)
router.get('/', QueryController.getAllQueries);
router.get('/:id', QueryController.getQueryById);
router.patch('/:id/status', QueryController.updateQueryStatus);

module.exports = router;
