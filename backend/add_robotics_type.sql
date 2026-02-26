-- Migration: Add 'robotics' to enrollment type enum
-- Run this SQL query to update the database schema

USE stackenzo_db;

ALTER TABLE enrollment_submissions 
MODIFY COLUMN type ENUM('enrollment', 'workshop', 'internship', 'robotics') DEFAULT 'enrollment';

-- Verify the change
DESCRIBE enrollment_submissions;
