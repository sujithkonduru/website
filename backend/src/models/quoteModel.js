const { pool } = require('../config/database');

class QuoteModel {
  static async create(quoteData) {
    const { name, email, phone, company, service, message } = quoteData;
    const [result] = await pool.query(
      'INSERT INTO quote_requests (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone, company, service, message]
    );
    return result.insertId;
  }

  static async getAll(filters = {}) {
    let query = 'SELECT * FROM quote_requests WHERE 1=1';
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

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM quote_requests WHERE id = ?', [id]);
    return rows[0];
  }

  static async updateStatus(id, status) {
    const [result] = await pool.query(
      'UPDATE quote_requests SET status = ? WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = QuoteModel;
