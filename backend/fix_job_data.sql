-- Check current data in job_postings
SELECT id, title, requirements, responsibilities FROM job_postings;

-- Fix the job posting with invalid JSON
-- Replace the requirements and responsibilities with proper JSON arrays

UPDATE job_postings 
SET 
  requirements = '["React", "Node.js", "MongoDB", "REST APIs", "Git"]',
  responsibilities = '["Develop web applications", "Write clean code", "Collaborate with team", "Code reviews"]'
WHERE id = 1;

-- Verify the fix
SELECT id, title, requirements, responsibilities FROM job_postings;
