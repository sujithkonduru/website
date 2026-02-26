const { pool } = require('../config/database');

class JobModel {
  // Create job posting
  static async createPosting(jobData) {
    const { title, department, location, type, experience, salary, description, requirements, responsibilities } = jobData;
    const [result] = await pool.query(
      'INSERT INTO job_postings (title, department, location, type, experience, salary, description, requirements, responsibilities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [title, department, location, type, experience, salary, description, JSON.stringify(requirements), JSON.stringify(responsibilities)]
    );
    return result.insertId;
  }

  // Get all active job postings
  static async getAllPostings(filters = {}) {
    let query = 'SELECT * FROM job_postings WHERE is_active = true';
    const params = [];

    if (filters.department) {
      query += ' AND department = ?';
      params.push(filters.department);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await pool.query(query, params);
    return rows.map(row => {
      let requirements = [];
      let responsibilities = [];
      
      try {
        requirements = typeof row.requirements === 'string' ? JSON.parse(row.requirements) : row.requirements;
      } catch (e) {
        requirements = [];
      }
      
      try {
        responsibilities = typeof row.responsibilities === 'string' ? JSON.parse(row.responsibilities) : row.responsibilities;
      } catch (e) {
        responsibilities = [];
      }
      
      return {
        ...row,
        requirements,
        responsibilities
      };
    });
  }

  // Get job by ID
  static async getPostingById(id) {
    const [rows] = await pool.query(
      'SELECT * FROM job_postings WHERE id = ?',
      [id]
    );
    if (rows[0]) {
      let requirements = [];
      let responsibilities = [];
      
      try {
        requirements = typeof rows[0].requirements === 'string' ? JSON.parse(rows[0].requirements) : rows[0].requirements;
      } catch (e) {
        requirements = [];
      }
      
      try {
        responsibilities = typeof rows[0].responsibilities === 'string' ? JSON.parse(rows[0].responsibilities) : rows[0].responsibilities;
      } catch (e) {
        responsibilities = [];
      }
      
      return {
        ...rows[0],
        requirements,
        responsibilities
      };
    }
    return null;
  }

  // Create job application
  static async createApplication(applicationData) {
    const { job_id, name, email, phone, resume_url, cover_letter } = applicationData;
    const [result] = await pool.query(
      'INSERT INTO job_applications (job_id, name, email, phone, resume_url, cover_letter) VALUES (?, ?, ?, ?, ?, ?)',
      [job_id, name, email, phone, resume_url, cover_letter]
    );
    return result.insertId;
  }

  // Get all applications
  static async getAllApplications(filters = {}) {
    let query = `
      SELECT ja.*, jp.title as job_title, jp.department
      FROM job_applications ja
      LEFT JOIN job_postings jp ON ja.job_id = jp.id
      WHERE 1=1
    `;
    const params = [];

    if (filters.job_id) {
      query += ' AND ja.job_id = ?';
      params.push(filters.job_id);
    }

    if (filters.status) {
      query += ' AND ja.status = ?';
      params.push(filters.status);
    }

    query += ' ORDER BY ja.created_at DESC';

    const [rows] = await pool.query(query, params);
    return rows;
  }

  // Update application status
  static async updateApplicationStatus(id, status) {
    const [result] = await pool.query(
      'UPDATE job_applications SET status = ? WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = JobModel;
