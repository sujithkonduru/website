const { pool } = require('../config/database');

const ProgramModel = {
  // Get all programs
  getAll: async () => {
    const [rows] = await pool.query(
      'SELECT * FROM programs ORDER BY date DESC'
    );
    return rows.map(row => ({
      ...row,
      tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags
    }));
  },

  // Get program by ID
  getById: async (id) => {
    const [rows] = await pool.query(
      'SELECT * FROM programs WHERE id = ?',
      [id]
    );
    if (rows.length === 0) return null;
    return {
      ...rows[0],
      tags: typeof rows[0].tags === 'string' ? JSON.parse(rows[0].tags) : rows[0].tags
    };
  },

  // Get programs by type
  getByType: async (type) => {
    const [rows] = await pool.query(
      'SELECT * FROM programs WHERE type = ? ORDER BY date DESC',
      [type]
    );
    return rows.map(row => ({
      ...row,
      tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags
    }));
  },

  // Get programs by status
  getByStatus: async (status) => {
    const [rows] = await pool.query(
      'SELECT * FROM programs WHERE status = ? ORDER BY date DESC',
      [status]
    );
    return rows.map(row => ({
      ...row,
      tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags
    }));
  },

  // Create new program
  create: async (programData) => {
    const { title, type, date, location, description, duration, status, registrationLink, tags } = programData;
    const [result] = await pool.query(
      `INSERT INTO programs (title, type, date, location, description, duration, status, registration_link, tags)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, type, date, location, description, duration, status, registrationLink, JSON.stringify(tags)]
    );
    return result.insertId;
  },

  // Update program
  update: async (id, programData) => {
    const { title, type, date, location, description, duration, status, registrationLink, tags } = programData;
    const [result] = await pool.query(
      `UPDATE programs 
       SET title = ?, type = ?, date = ?, location = ?, description = ?, 
           duration = ?, status = ?, registration_link = ?, tags = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, type, date, location, description, duration, status, registrationLink, JSON.stringify(tags), id]
    );
    return result.affectedRows > 0;
  },

  // Delete program
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM programs WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },

  // Register for program
  registerUser: async (registrationData) => {
    const { programId, name, email, phone, message } = registrationData;
    const [result] = await pool.query(
      `INSERT INTO program_registrations (program_id, name, email, phone, message)
       VALUES (?, ?, ?, ?, ?)`,
      [programId, name, email, phone, message]
    );
    return result.insertId;
  },

  // Get registrations for a program
  getRegistrations: async (programId) => {
    const [rows] = await pool.query(
      'SELECT * FROM program_registrations WHERE program_id = ? ORDER BY created_at DESC',
      [programId]
    );
    return rows;
  },

  // Update registration status
  updateRegistrationStatus: async (id, status) => {
    const [result] = await pool.query(
      'UPDATE program_registrations SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = ProgramModel;
