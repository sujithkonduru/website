const { pool } = require('../config/database');

class ContactModel {
  // Create new contact submission
  static async create(contactData) {
    const { name, email, phone, subject, message } = contactData;
    const [result] = await pool.query(
      'INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, subject, message]
    );
    return result.insertId;
  }

  // Get all contact submissions
  static async getAll(filters = {}) {
    let query = 'SELECT * FROM contact_submissions WHERE 1=1';
    const params = [];

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
      'SELECT * FROM contact_submissions WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  // Update status
  static async updateStatus(id, status) {
    const [result] = await pool.query(
      'UPDATE contact_submissions SET status = ? WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }

  // Delete
  static async delete(id) {
    const [result] = await pool.query(
      'DELETE FROM contact_submissions WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ContactModel;
