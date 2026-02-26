const mysql = require('mysql2/promise');
require('dotenv').config();

const addQuoteRequestsTable = async () => {
  let connection;
  
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'stackenzo_db',
      port: process.env.DB_PORT || 3306
    });

    console.log('🔄 Adding quote_requests table...');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        company VARCHAR(255) NOT NULL,
        service VARCHAR(255) NOT NULL,
        message TEXT,
        status ENUM('pending', 'contacted', 'quoted', 'closed') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_status (status),
        INDEX idx_service (service)
      )
    `);

    console.log('✅ Quote requests table created successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

addQuoteRequestsTable()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
