# Email Configuration Guide

## Overview
The system automatically sends thank you emails to users when they:
- Register for a program
- Submit R&D applications
- Submit contact forms
- Request quotes
- Apply for jobs

## Email Setup Instructions

### Option 1: Using Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Stackenzo Backend"
   - Copy the 16-character password

3. **Update .env file**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

### Option 2: Using Other Email Services

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Yahoo
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

#### Custom SMTP Server
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASSWORD=your-password
```

## Email Templates

### Program Registration Email
Sent when user registers for a program:
- Subject: "Registration Confirmed - {Program Title}"
- Contains: Program details, date, location, duration
- Sender: Stackenzo <your-email@gmail.com>

### R&D Application Email
Sent when user applies for R&D project:
- Subject: "Application Received - {Project Title}"
- Contains: Application confirmation, next steps
- Sender: Stackenzo <your-email@gmail.com>

### Contact Form Email
Sent when user submits contact form:
- Subject: "Thank you for contacting Stackenzo"
- Contains: Confirmation message, response timeline
- Sender: Stackenzo <your-email@gmail.com>

## Testing Email Configuration

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Test program registration**
   - Go to http://localhost:5173/Programs
   - Click "Learn More" on any program
   - Click "Register Now"
   - Fill the form with your email
   - Submit and check your inbox

3. **Check backend logs**
   - Look for: "Email sent: <message-id>"
   - If error: "Email sending failed: <error>"

## Troubleshooting

### Error: "Invalid login"
- Check EMAIL_USER and EMAIL_PASSWORD are correct
- For Gmail, ensure you're using App Password, not regular password
- Verify 2FA is enabled on Gmail

### Error: "Connection timeout"
- Check EMAIL_HOST and EMAIL_PORT
- Verify firewall isn't blocking port 587
- Try port 465 with secure: true

### Error: "Self-signed certificate"
- Add to transporter config:
  ```javascript
  tls: { rejectUnauthorized: false }
  ```

### Emails not received
- Check spam/junk folder
- Verify email address is correct
- Check backend logs for errors
- Test with different email provider

## Production Recommendations

1. **Use Professional Email Service**
   - SendGrid (free tier: 100 emails/day)
   - Mailgun (free tier: 5,000 emails/month)
   - AWS SES (very cheap, reliable)

2. **Use Custom Domain**
   - noreply@stackenzo.com
   - support@stackenzo.com
   - info@stackenzo.com

3. **Add Email Templates**
   - Use HTML email templates
   - Add company logo
   - Include social media links
   - Add unsubscribe option

4. **Monitor Email Delivery**
   - Track open rates
   - Monitor bounce rates
   - Log all email attempts
   - Set up alerts for failures

## Current Implementation

The email functionality is already implemented in:
- `backend/src/utils/emailService.js` - Email sending service
- `backend/src/controllers/programController.js` - Program registration emails
- `backend/src/controllers/rndApplicationController.js` - R&D application emails
- `backend/src/controllers/contactController.js` - Contact form emails

All you need to do is configure the `.env` file with your email credentials!

## Example .env Configuration

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=stackenzo.noreply@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

Replace with your actual credentials and restart the backend server.
