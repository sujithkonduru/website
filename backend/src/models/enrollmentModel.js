const { pool } = require('../config/database');

class EnrollmentModel {
  // Create new enrollment
  static async create(enrollmentData) {
    const { name, email, phone, course, department, education, message, type } = enrollmentData;
    const [result] = await pool.query(
      'INSERT INTO enrollment_submissions (name, email, phone, course, department, education, message, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, phone, course, department || null, education, message, type || 'enrollment']
    );
    return result.insertId;
  }

  // Get all enrollments
  static async getAll(filters = {}) {
    let query = 'SELECT * FROM enrollment_submissions WHERE 1=1';
    const params = [];

    if (filters.type) {
      query += ' AND type = ?';
      params.push(filters.type);
    }

    if (filters.status) {
      query += ' AND status = ?';
      params.push(filters.status);
    }

    query += ' ORDER BY created_at DESC';

    if (filters.limit) {
      query += ' LIMIT ?';
      params.push(parseInt(filters.limit));
    }

    const [rows] = await pool.query(query, params);
    return rows;
  }

  // Get by ID
  static async getById(id) {
    const [rows] = await pool.query(
      'SELECT * FROM enrollment_submissions WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  // Update status
  static async updateStatus(id, status) {
    const [result] = await pool.query(
      'UPDATE enrollment_submissions SET status = ? WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }

  // Get statistics
  static async getStats() {
    const [stats] = await pool.query(`
      SELECT 
        type,
        status,
        COUNT(*) as count
      FROM enrollment_submissions
      GROUP BY type, status
    `);
    return stats;
  }
}

module.exports = EnrollmentModel;
