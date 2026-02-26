const { pool } = require('./src/config/database');

async function createMarketingAuditsTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS marketing_audits (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        company VARCHAR(255) NOT NULL,
        website VARCHAR(500),
        industry ENUM('Healthcare', 'Education', 'Real Estate', 'E-commerce', 'Technology', 'Hospitality', 'Other') NOT NULL,
        current_marketing TEXT,
        goals TEXT NOT NULL,
        budget ENUM('Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+') NOT NULL,
        status ENUM('pending', 'contacted', 'completed') DEFAULT 'pending',
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;

    await pool.execute(createTableQuery);
    console.log('✅ Marketing audits table created successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating marketing audits table:', error);
    process.exit(1);
  }
}

createMarketingAuditsTable();