const { pool } = require('../config/database');

const RoboticsEnrollmentModel = {
  // Create new enrollment
  create: async (enrollmentData) => {
    const { 
      studentName, parentName, email, phone, studentClass, 
      school, age, previousExperience, message 
    } = enrollmentData;
    
    const [result] = await pool.query(
      `INSERT INTO robotics_enrollments 
       (student_name, parent_name, email, phone, student_class, school, age, previous_experience, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [studentName, parentName, email, phone, studentClass, school, age, previousExperience, message]
    );
    return result.insertId;
  },

  // Get all enrollments
  getAll: async () => {
    const [rows] = await pool.query(
      'SELECT * FROM robotics_enrollments ORDER BY created_at DESC'
    );
    return rows;
  },

  // Get enrollment by ID
  getById: async (id) => {
    const [rows] = await pool.query(
      'SELECT * FROM robotics_enrollments WHERE id = ?',
      [id]
    );
    return rows[0];
  },

  // Update enrollment status
  updateStatus: async (id, status) => {
    const [result] = await pool.query(
      'UPDATE robotics_enrollments SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  },

  // Delete enrollment
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM robotics_enrollments WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = RoboticsEnrollmentModel;
