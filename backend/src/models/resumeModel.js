const { pool } = require('../config/database');

const createResume = async (resumeData) => {
  const query = `
    INSERT INTO resume_submissions 
    (name, email, phone, position, experience, resume_filename, resume_data, resume_mimetype, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.query(query, [
    resumeData.name,
    resumeData.email,
    resumeData.phone,
    resumeData.position,
    resumeData.experience,
    resumeData.resume_filename,
    resumeData.resume_data,
    resumeData.resume_mimetype,
    resumeData.message
  ]);
  return result.insertId;
};

const getAllResumes = async (filters = {}) => {
  let query = 'SELECT id, name, email, phone, position, experience, resume_filename, message, status, created_at FROM resume_submissions WHERE 1=1';
  const params = [];

  if (filters.status) {
    query += ' AND status = ?';
    params.push(filters.status);
  }

  query += ' ORDER BY created_at DESC';
  const [rows] = await pool.query(query, params);
  
  // Add resume_url to each row
  return rows.map(row => ({
    ...row,
    resume_url: `http://localhost:5000/api/resumes/${row.id}/view`
  }));
};

const getResumeById = async (id) => {
  const query = 'SELECT * FROM resume_submissions WHERE id = ?';
  const [rows] = await pool.query(query, [id]);
  return rows[0];
};

const updateResumeStatus = async (id, status) => {
  const query = 'UPDATE resume_submissions SET status = ? WHERE id = ?';
  await pool.query(query, [status, id]);
};

module.exports = {
  createResume,
  getAllResumes,
  getResumeById,
  updateResumeStatus
};
