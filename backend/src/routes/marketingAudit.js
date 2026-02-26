const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');
const { body, validationResult } = require('express-validator');

// POST /api/marketing-audit
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('company').notEmpty().withMessage('Company name is required'),
  body('industry').notEmpty().withMessage('Industry is required'),
  body('goals').notEmpty().withMessage('Marketing goals are required'),
  body('budget').notEmpty().withMessage('Budget is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const {
      name,
      email,
      phone,
      company,
      website,
      industry,
      currentMarketing,
      goals,
      budget
    } = req.body;

    const query = `
      INSERT INTO marketing_audits 
      (name, email, phone, company, website, industry, current_marketing, goals, budget, submitted_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    await pool.execute(query, [
      name, email, phone, company, website || null, 
      industry, currentMarketing || null, goals, budget
    ]);

    res.json({
      success: true,
      message: 'Marketing audit request submitted successfully'
    });

  } catch (error) {
    console.error('Marketing audit submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// GET /api/marketing-audit (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM marketing_audits ORDER BY submitted_at DESC'
    );
    res.json({
      success: true,
      audits: rows
    });
  } catch (error) {
    console.error('Error fetching marketing audits:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;