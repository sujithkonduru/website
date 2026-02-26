# Database Migration: Add Robotics Type

## Problem
The `enrollment_submissions` table's `type` column only accepts: `'enrollment'`, `'workshop'`, `'internship'`

We need to add `'robotics'` to support robotics page enrollments.

## Solution

### Option 1: Run Migration Script (Easiest)
```bash
cd backend
node migrate_robotics.js
```

### Option 2: Run SQL Migration
```bash
# Connect to MySQL
mysql -u root -p

# Run the migration file
source add_robotics_type.sql
```

### Option 3: Run SQL Directly
```sql
USE stackenzo_db;

ALTER TABLE enrollment_submissions 
MODIFY COLUMN type ENUM('enrollment', 'workshop', 'internship', 'robotics') DEFAULT 'enrollment';
```

### Option 4: Using MySQL Workbench
1. Open MySQL Workbench
2. Connect to your database
3. Open `add_robotics_type.sql`
4. Execute the script

## Verify the Change
```sql
DESCRIBE enrollment_submissions;
```

You should see:
```
type | enum('enrollment','workshop','internship','robotics') | YES | | enrollment |
```

## After Migration
Restart your backend server:
```bash
cd backend
npm start
```

Now robotics enrollments will be stored successfully!
