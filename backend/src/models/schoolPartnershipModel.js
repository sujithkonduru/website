const { pool } = require('../config/database');

const SchoolPartnershipModel = {
  // Create new school partnership request
  create: async (partnershipData) => {
    const {
      schoolName, schoolAddress, contactPerson, designation, email, phone,
      city, state, pincode, studentCount, preferredStartDate, message
    } = partnershipData;

    const [result] = await pool.query(
      `INSERT INTO school_partnerships
       (school_name, school_address, contact_person, designation, email, phone,
        city, state, pincode, student_count, preferred_start_date, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [schoolName, schoolAddress, contactPerson, designation, email, phone,
       city, state, pincode, studentCount, preferredStartDate, message]
    );
    return result.insertId;
  },

  // Get all school partnership requests
  getAll: async () => {
    const [rows] = await pool.query(
      'SELECT * FROM school_partnerships ORDER BY created_at DESC'
    );
    return rows;
  },

  // Get partnership by ID
  getById: async (id) => {
    const [rows] = await pool.query(
      'SELECT * FROM school_partnerships WHERE id = ?',
      [id]
    );
    return rows[0];
  },

  // Update partnership status
  updateStatus: async (id, status) => {
    const [result] = await pool.query(
      'UPDATE school_partnerships SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  },

  // Delete partnership request
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM school_partnerships WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = SchoolPartnershipModel;
