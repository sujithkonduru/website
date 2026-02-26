const mysql = require('mysql2/promise');
require('dotenv').config();

const runMigration = async () => {
  let connection;
  
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'stackenzo_db',
      port: process.env.DB_PORT || 3306
    });

    console.log('🔄 Running migration: Add robotics type...');

    await connection.query(`
      ALTER TABLE enrollment_submissions 
      MODIFY COLUMN type ENUM('enrollment', 'workshop', 'internship', 'robotics') DEFAULT 'enrollment'
    `);

    console.log('✅ Migration completed successfully!');
    console.log('📝 Enrollment type now accepts: enrollment, workshop, internship, robotics');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

runMigration()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
