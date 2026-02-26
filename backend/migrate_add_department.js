const mysql = require('mysql2/promise');
require('dotenv').config();

const addDepartmentColumn = async () => {
  let connection;
  
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'stackenzo_db',
      port: process.env.DB_PORT || 3306
    });

    console.log('🔄 Adding department column to enrollment_submissions...');

    await connection.query(`
      ALTER TABLE enrollment_submissions 
      ADD COLUMN department VARCHAR(255) AFTER course
    `);

    console.log('✅ Department column added successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

addDepartmentColumn()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
