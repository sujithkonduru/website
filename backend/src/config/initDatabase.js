const mysql = require('mysql2/promise');
require('dotenv').config();

const initDatabase = async () => {
  let connection;
  
  try {
    // Connect without database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Frnds@2203',
      port: process.env.DB_PORT || 3306
    });

    console.log('📦 Creating database...');
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'stackenzo_db'}`);
    await connection.query(`USE ${process.env.DB_NAME || 'stackenzo_db'}`);
    const dbName = process.env.DB_NAME || 'stackenzo_db';

    // Create tables
    console.log('📋 Creating tables...');

    // Contact submissions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        status ENUM('new', 'in_progress', 'resolved') DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_status (status),
        INDEX idx_created (created_at)
      )
    `);

    // Enrollment submissions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS enrollment_submissions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        course VARCHAR(255) NOT NULL,
        department VARCHAR(255),
        education ENUM('high-school', 'undergraduate', 'graduate', 'postgraduate', 'professional') NOT NULL,
        message TEXT,
        type ENUM('enrollment', 'workshop', 'internship', 'robotics') DEFAULT 'enrollment',
        status ENUM('pending', 'contacted', 'enrolled', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_type (type),
        INDEX idx_status (status)
      )
    `);

    // Ensure department column exists in case of older installations
    const [deptCol] = await connection.query(
      `SELECT COUNT(*) AS cnt
       FROM information_schema.COLUMNS
       WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'enrollment_submissions' AND COLUMN_NAME = 'department'`,
      [dbName]
    );
    if (deptCol[0].cnt === 0) {
      await connection.query(
        `ALTER TABLE enrollment_submissions ADD COLUMN department VARCHAR(255) AFTER course`
      );
      console.log('✅ Added missing department column to enrollment_submissions');
    }

    // Job applications table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS job_applications (
        id INT PRIMARY KEY AUTO_INCREMENT,
        job_id INT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        resume_url VARCHAR(500),
        cover_letter TEXT,
        status ENUM('applied', 'screening', 'interview', 'rejected', 'hired') DEFAULT 'applied',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_job (job_id),
        INDEX idx_status (status)
      )
    `);

    // Job postings table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS job_postings (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        type ENUM('Full-time', 'Part-time', 'Contract', 'Internship') DEFAULT 'Full-time',
        experience VARCHAR(50),
        salary VARCHAR(100),
        description TEXT NOT NULL,
        requirements JSON,
        responsibilities JSON,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_department (department),
        INDEX idx_active (is_active)
      )
    `);

    // Newsletter subscribers table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        is_active BOOLEAN DEFAULT true,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        unsubscribed_at TIMESTAMP NULL,
        INDEX idx_email (email),
        INDEX idx_active (is_active)
      )
    `);

    // Admin users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role ENUM('admin', 'manager', 'staff') DEFAULT 'staff',
        is_active BOOLEAN DEFAULT true,
        last_login TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email)
      )
    `);

    // Resume submissions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS resume_submissions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        position VARCHAR(255),
        experience VARCHAR(100),
        resume_filename VARCHAR(255) NOT NULL,
        resume_data LONGBLOB NOT NULL,
        resume_mimetype VARCHAR(100) NOT NULL,
        message TEXT,
        status ENUM('pending', 'reviewed', 'shortlisted', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_status (status)
      )
    `);

    // Quote requests table
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

    // R&D applications table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS rnd_applications (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        project_id VARCHAR(100),
        project_title VARCHAR(255) NOT NULL,
        qualification VARCHAR(255) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        cgpa DECIMAL(3,2),
        experience TEXT,
        research_interests TEXT NOT NULL,
        why_join TEXT NOT NULL,
        resume_url VARCHAR(500),
        status ENUM('pending', 'reviewing', 'shortlisted', 'interview', 'selected', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_project (project_id),
        INDEX idx_status (status)
      )
    `);

    // Programs table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS programs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        type ENUM('workshop', 'hackathon', 'challenge', 'school-program', 'expo') NOT NULL,
        date DATE NOT NULL,
        location VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        duration VARCHAR(100) NOT NULL,
        status ENUM('upcoming', 'ongoing', 'registration-open', 'completed', 'cancelled') DEFAULT 'upcoming',
        registration_link VARCHAR(500),
        tags JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_type (type),
        INDEX idx_status (status),
        INDEX idx_date (date)
      )
    `);

    // Program registrations table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS program_registrations (
        id INT PRIMARY KEY AUTO_INCREMENT,
        program_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        message TEXT,
        status ENUM('pending', 'confirmed', 'attended', 'cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (program_id) REFERENCES programs(id) ON DELETE CASCADE,
        INDEX idx_program (program_id),
        INDEX idx_email (email),
        INDEX idx_status (status)
      )
    `);

    // Robotics enrollments table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS robotics_enrollments (
        id INT PRIMARY KEY AUTO_INCREMENT,
        student_name VARCHAR(255) NOT NULL,
        parent_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        student_class ENUM('6', '7', '8', '9') NOT NULL,
        school VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        previous_experience ENUM('yes', 'no') DEFAULT 'no',
        message TEXT,
        status ENUM('pending', 'contacted', 'enrolled', 'cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_class (student_class),
        INDEX idx_status (status)
      )
    `);

    // School partnerships table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS school_partnerships (
        id INT PRIMARY KEY AUTO_INCREMENT,
        school_name VARCHAR(255) NOT NULL,
        school_address TEXT NOT NULL,
        contact_person VARCHAR(255) NOT NULL,
        designation VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        pincode VARCHAR(10) NOT NULL,
        student_count INT NOT NULL,
        preferred_start_date DATE NOT NULL,
        message TEXT NOT NULL,
        status ENUM('pending', 'reviewing', 'contacted', 'approved', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_city (city),
        INDEX idx_state (state),
        INDEX idx_status (status)
      )
    `);

    // Queries table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS queries (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(500) NOT NULL,
        category VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        status ENUM('new', 'in_progress', 'resolved') DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_category (category),
        INDEX idx_status (status),
        INDEX idx_created (created_at)
      )
    `);

    console.log('✅ Database initialized successfully!');
    console.log('📊 Tables created:');
    console.log('   - contact_submissions');
    console.log('   - enrollment_submissions');
    console.log('   - job_applications');
    console.log('   - job_postings');
    console.log('   - newsletter_subscribers');
    console.log('   - admin_users');
    console.log('   - resume_submissions');
    console.log('   - quote_requests');
    console.log('   - rnd_applications');
    console.log('   - programs');
    console.log('   - program_registrations');
    console.log('   - robotics_enrollments');
    console.log('   - school_partnerships');
    console.log('   - queries');

  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

// Run if called directly
if (require.main === module) {
  initDatabase()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = initDatabase;
