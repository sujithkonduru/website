# Stackenzo Backend API

Complete backend API for Stackenzo Education Platform built with Node.js, Express, and MySQL.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)

## ✨ Features

- ✅ Contact form submissions with email notifications
- ✅ Workshop/Internship enrollment management
- ✅ Job postings and applications
- ✅ Newsletter subscription system
- ✅ Email notifications (Nodemailer)
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled
- ✅ MySQL database with connection pooling

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **Validation:** express-validator
- **Email:** Nodemailer
- **Security:** bcryptjs, jsonwebtoken
- **Environment:** dotenv

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Database connection
│   │   └── initDatabase.js      # Database initialization
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── enrollmentController.js
│   │   ├── jobController.js
│   │   └── newsletterController.js
│   ├── models/
│   │   ├── contactModel.js
│   │   ├── enrollmentModel.js
│   │   ├── jobModel.js
│   │   └── newsletterModel.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── enrollmentRoutes.js
│   │   ├── jobRoutes.js
│   │   └── newsletterRoutes.js
│   ├── middleware/
│   │   ├── validation.js        # Input validation
│   │   └── errorHandler.js      # Error handling
│   ├── utils/
│   │   └── emailService.js      # Email utility
│   ├── app.js                   # Express app
│   └── server.js                # Server entry point
├── .env.example                 # Environment template
├── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your configuration (see [Configuration](#configuration))

4. **Initialize database**
```bash
npm run init-db
```

5. **Start the server**
```bash
# Development
npm run dev

# Production
npm start
```

## ⚙️ Configuration

Create a `.env` file in the backend directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=stackenzo_db
DB_PORT=3306

# JWT
JWT_SECRET=your_secret_key

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Frontend
FRONTEND_URL=http://localhost:5173

# Admin
ADMIN_EMAIL=admin@stackenzo.com
```

### Email Setup (Gmail)
1. Enable 2-factor authentication
2. Generate App Password: Google Account → Security → App Passwords
3. Use the generated password in `EMAIL_PASSWORD`

## 🗄️ Database Setup

### Automatic Setup
```bash
npm run init-db
```

### Manual Setup
```sql
CREATE DATABASE stackenzo_db;
USE stackenzo_db;

-- Tables will be created automatically by initDatabase.js
```

### Database Schema

**Tables:**
- `contact_submissions` - Contact form data
- `enrollment_submissions` - Workshop/internship enrollments
- `job_postings` - Job listings
- `job_applications` - Job applications
- `newsletter_subscribers` - Newsletter emails
- `admin_users` - Admin authentication

## 🏃 Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Health Check
```bash
curl http://localhost:5000/health
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

---

### 📧 Contact API

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Inquiry about courses",
  "message": "I want to know more about your programs"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": { "id": 1 }
}
```

#### Get All Contacts (Admin)
```http
GET /api/contact?status=new&limit=10
```

---

### 🎓 Enrollment API

#### Submit Enrollment
```http
POST /api/enrollments
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "course": "Full Stack Web Development",
  "education": "undergraduate",
  "message": "Looking forward to learning",
  "type": "workshop"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enrollment submitted successfully",
  "data": { "id": 1 }
}
```

#### Get All Enrollments (Admin)
```http
GET /api/enrollments?type=workshop&status=pending
```

#### Get Enrollment Statistics (Admin)
```http
GET /api/enrollments/stats
```

---

### 💼 Jobs API

#### Get All Job Postings
```http
GET /api/jobs/postings?department=Engineering
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Full Stack Developer",
      "department": "Engineering",
      "location": "Bangalore",
      "type": "Full-time",
      "experience": "2-4 years",
      "salary": "₹8-15 LPA",
      "description": "Build scalable applications...",
      "requirements": ["React", "Node.js"],
      "responsibilities": ["Develop features", "Code reviews"],
      "is_active": true
    }
  ]
}
```

#### Get Job by ID
```http
GET /api/jobs/postings/1
```

#### Submit Job Application
```http
POST /api/jobs/applications
Content-Type: application/json

{
  "job_id": 1,
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "phone": "9876543210",
  "resume_url": "https://example.com/resume.pdf",
  "cover_letter": "I am interested in this position..."
}
```

#### Create Job Posting (Admin)
```http
POST /api/jobs/postings
Content-Type: application/json

{
  "title": "Backend Developer",
  "department": "Engineering",
  "location": "Remote",
  "type": "Full-time",
  "experience": "3-5 years",
  "salary": "₹10-18 LPA",
  "description": "Build robust APIs...",
  "requirements": ["Node.js", "MySQL", "AWS"],
  "responsibilities": ["Design APIs", "Database optimization"]
}
```

---

### 📰 Newsletter API

#### Subscribe
```http
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "subscriber@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

#### Unsubscribe
```http
POST /api/newsletter/unsubscribe
Content-Type: application/json

{
  "email": "subscriber@example.com"
}
```

#### Get Subscriber Count (Admin)
```http
GET /api/newsletter/count
```

---

## 🔒 Error Responses

All errors follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Optional validation errors
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request / Validation Error
- `404` - Not Found
- `409` - Conflict (Duplicate)
- `500` - Server Error

## 🧪 Testing APIs

### Using cURL
```bash
# Contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing"}'

# Get jobs
curl http://localhost:5000/api/jobs/postings
```

### Using Postman
1. Import the API endpoints
2. Set base URL: `http://localhost:5000/api`
3. Test each endpoint

## 📝 Notes

- Email notifications are sent asynchronously
- Failed emails won't break API responses
- All timestamps are in UTC
- Admin routes need authentication (add JWT middleware in production)
- Database uses connection pooling for performance

## 🔐 Security Recommendations

For production:
1. Add JWT authentication middleware
2. Implement rate limiting
3. Use HTTPS
4. Sanitize all inputs
5. Enable SQL injection protection
6. Add request logging
7. Implement CSRF protection
8. Use environment-specific configs

## 📞 Support

For issues or questions:
- Email: admin@stackenzo.com
- Create an issue in the repository

## 📄 License

MIT License - Stackenzo 2024
