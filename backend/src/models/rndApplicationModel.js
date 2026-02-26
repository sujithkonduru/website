const db = require('../config/database');

const rndApplicationModel = {
  create: async (applicationData) => {
    const query = `
      INSERT INTO rnd_applications 
      (name, email, phone, project_id, project_title, qualification, institution, 
       cgpa, experience, research_interests, why_join, resume_url, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())
    `;
    
    const [result] = await db.execute(query, [
      applicationData.name,
      applicationData.email,
      applicationData.phone,
      applicationData.projectId,
      applicationData.projectTitle,
      applicationData.qualification,
      applicationData.institution,
      applicationData.cgpa,
      applicationData.experience,
      applicationData.researchInterests,
      applicationData.whyJoin,
      applicationData.resumeUrl
    ]);
    
    return result.insertId;
  },

  getAll: async () => {
    const query = 'SELECT * FROM rnd_applications ORDER BY created_at DESC';
    const [rows] = await db.execute(query);
    return rows;
  },

  getById: async (id) => {
    const query = 'SELECT * FROM rnd_applications WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },

  updateStatus: async (id, status) => {
    const query = 'UPDATE rnd_applications SET status = ? WHERE id = ?';
    const [result] = await db.execute(query, [status, id]);
    return result.affectedRows > 0;
  },

  delete: async (id) => {
    const query = 'DELETE FROM rnd_applications WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result.affectedRows > 0;
  }
};

module.exports = rndApplicationModel;
