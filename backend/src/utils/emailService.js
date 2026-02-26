const nodemailer = require('nodemailer');

// Create transporter with better configuration
const buildTransporter = () => {
  // Validate environment variables
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Missing email configuration in environment variables');
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // Only for development
    },
    // Connection pool configuration
    pool: true,
    maxConnections: 5,
    maxMessages: 100
  });
};

// Verify transporter connection
const verifyTransporter = async (transporter) => {
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('❌ SMTP connection verification failed:', error.message);
    return false;
  }
};

// Send email with improved error handling
const sendEmail = async ({ to, subject, html, from = null }) => {
  try {
    console.log('📧 Attempting to send email...');
    console.log('📍 To:', to);
    console.log('📍 Subject:', subject);
    
    // Log config (without showing full password)
    console.log('📋 Email config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASSWORD
    });

    // Create transporter
    const transporter = buildTransporter();

    // Verify connection before sending
    const isVerified = await verifyTransporter(transporter);
    if (!isVerified) {
      throw new Error('Could not verify SMTP connection');
    }

    // Prepare mail options
    const mailOptions = {
      from: from || `"Stackenzo" <${process.env.EMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to, // Handle multiple recipients
      subject,
      html,
      // Add text version for better email client compatibility
      text: html.replace(/<[^>]*>/g, ''), // Simple text version by stripping HTML
      // Add headers for better deliverability
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'X-Mailer': 'Stackenzo Mail Service'
      }
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('📬 Message ID:', info.messageId);
    console.log('📨 Response:', info.response);
    
    // Return detailed info
    return {
      success: true,
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
      pending: info.pending
    };
    
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    
    // Detailed error logging
    if (error.code) {
      console.error('Error code:', error.code);
    }
    if (error.command) {
      console.error('Failed command:', error.command);
    }
    if (error.response) {
      console.error('Server response:', error.response);
    }
    
    // Return error info without throwing
    return {
      success: false,
      error: error.message,
      code: error.code,
      command: error.command
    };
  }
};

// Send enrollment confirmation email
const sendEnrollmentConfirmation = async ({ email, studentName, className, parentName }) => {
  const subject = '🎉 Welcome to Stackenzo Robotics Program!';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 28px;">🤖 Welcome to Stackenzo Robotics!</h1>
      </div>
      
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #444;">Dear ${parentName},</p>
        
        <p style="font-size: 16px; color: #666;">Thank you for enrolling <strong>${studentName}</strong> in our Robotics Program for <strong>${className}</strong>! We're excited to have you join our community of young innovators.</p>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
          <h3 style="color: #667eea; margin-top: 0;">📋 Enrollment Details:</h3>
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Class:</strong> ${className}</p>
          <p><strong>Program:</strong> Robotics Education</p>
        </div>
        
        <h3 style="color: #444;">🚀 What's Next?</h3>
        <ul style="color: #666; padding-left: 20px;">
          <li>You'll receive a welcome call from our team within 24-48 hours</li>
          <li>We'll share the class schedule and batch details</li>
          <li>Get ready for an exciting robotics journey!</li>
        </ul>
        
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 25px 0;">
          <p style="color: #2e7d32; margin: 0;"><strong>✨ Program Highlights:</strong></p>
          <p style="color: #2e7d32; margin: 10px 0 0;">✓ 1-3 hours per week • No exams • Hands-on learning • Build real robots!</p>
        </div>
        
        <p style="color: #666;">If you have any questions, feel free to reply to this email or contact us at <a href="mailto:support@stackenzo.com" style="color: #667eea;">support@stackenzo.com</a></p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">
        
        <p style="color: #999; font-size: 14px; text-align: center;">
          © ${new Date().getFullYear()} Stackenzo. All rights reserved.<br>
          Bridging education, innovation, and enterprise solutions.
        </p>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({ to: email, subject, html });
};

// Send admin notification for new enrollment
const sendAdminNotification = async ({ studentName, parentName, email, phone, studentClass, school }) => {
  const subject = '🔔 New Robotics Enrollment Received';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #667eea;">New Enrollment Details:</h2>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Student Name:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${studentName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Parent Name:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${parentName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Class:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${studentClass}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>School:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${school}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px;">Please contact the parent to confirm enrollment and provide next steps.</p>
    </body>
    </html>
  `;

  // Send to admin email from env
  return await sendEmail({ 
    to: process.env.ADMIN_EMAIL, 
    subject, 
    html 
  });
};

// Send school partnership confirmation email
const sendSchoolPartnershipConfirmation = async ({ email, schoolName, contactPerson }) => {
  const subject = '🏫 Thank You for Your School Partnership Interest!';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 28px;">🏫 Partnership Opportunity with Stackenzo</h1>
      </div>

      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #444;">Dear ${contactPerson},</p>

        <p style="font-size: 16px; color: #666;">Thank you for your interest in partnering with Stackenzo for robotics education at <strong>${schoolName}</strong>! We're excited about the possibility of bringing innovative STEM education to your students.</p>

        <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
          <h3 style="color: #667eea; margin-top: 0;">📋 What Happens Next?</h3>
          <ul style="color: #666; margin: 10px 0;">
            <li>Our partnership team will review your request</li>
            <li>You'll receive a call within 2-3 business days</li>
            <li>We'll discuss curriculum, implementation, and training options</li>
            <li>Customized proposal based on your school's needs</li>
          </ul>
        </div>

        <h3 style="color: #444;">🎓 Program Benefits for Your School:</h3>
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 25px 0;">
          <p style="color: #2e7d32; margin: 0;"><strong>✓ Hands-on Robotics Curriculum</strong></p>
          <p style="color: #2e7d32; margin: 5px 0;">✓ Teacher Training & Support</p>
          <p style="color: #2e7d32; margin: 5px 0;">✓ STEM Education Enhancement</p>
          <p style="color: #2e7d32; margin: 5px 0;">✓ Student Skill Development</p>
        </div>

        <p style="color: #666;">If you have any immediate questions, feel free to reply to this email or contact us at <a href="mailto:partnerships@stackenzo.com" style="color: #667eea;">partnerships@stackenzo.com</a></p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">

        <p style="color: #999; font-size: 14px; text-align: center;">
          © ${new Date().getFullYear()} Stackenzo. All rights reserved.<br>
          Empowering the next generation through robotics education.
        </p>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({ to: email, subject, html });
};

// Send admin notification for school partnership request
const sendAdminSchoolPartnershipNotification = async ({ schoolName, contactPerson, email, phone, city, state, studentCount }) => {
  const subject = '🏫 New School Partnership Request Received';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #667eea;">New School Partnership Request:</h2>

      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>School Name:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${schoolName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Contact Person:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${contactPerson}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Location:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${city}, ${state}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Student Count:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${studentCount}</td>
        </tr>
      </table>

      <p style="margin-top: 20px;">Please contact the school representative to discuss partnership opportunities and provide a customized proposal.</p>
    </body>
    </html>
  `;

  // Send to admin email from env
  return await sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject,
    html
  });
};

module.exports = {
  sendEmail,
  sendEnrollmentConfirmation,
  sendAdminNotification,
  sendSchoolPartnershipConfirmation,
  sendAdminSchoolPartnershipNotification
};
