const { pool } = require('../config/database');

class NewsletterModel {
  // Subscribe
  static async subscribe(email) {
    try {
      const [result] = await pool.query(
        'INSERT INTO newsletter_subscribers (email) VALUES (?)',
        [email]
      );
      return result.insertId;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // Reactivate if already exists
        await pool.query(
          'UPDATE newsletter_subscribers SET is_active = true, unsubscribed_at = NULL WHERE email = ?',
          [email]
        );
        return true;
      }
      throw error;
    }
  }

  // Unsubscribe
  static async unsubscribe(email) {
    const [result] = await pool.query(
      'UPDATE newsletter_subscribers SET is_active = false, unsubscribed_at = NOW() WHERE email = ?',
      [email]
    );
    return result.affectedRows > 0;
  }

  // Get all subscribers
  static async getAll(activeOnly = true) {
    let query = 'SELECT * FROM newsletter_subscribers';
    if (activeOnly) {
      query += ' WHERE is_active = true';
    }
    query += ' ORDER BY subscribed_at DESC';
    
    const [rows] = await pool.query(query);
    return rows;
  }

  // Get count
  static async getCount() {
    const [rows] = await pool.query(
      'SELECT COUNT(*) as count FROM newsletter_subscribers WHERE is_active = true'
    );
    return rows[0].count;
  }
}

module.exports = NewsletterModel;
