// Email service utilities for waiting list confirmations
// This is a template - integrate with your preferred email service

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text: string;
}

// Example integration with Resend (recommended for Next.js)
// Install: npm install resend
export async function sendConfirmationEmail(email: string, position?: number) {
  try {
    // Uncomment and configure when ready to use:
    
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailData: EmailData = {
      to: email,
      subject: "You're on the Fuse waiting list! 🚀",
      html: generateConfirmationHTML(email, position),
      text: generateConfirmationText(email, position)
    };

    // await resend.emails.send({
    //   from: 'Fuse <noreply@yourdomain.com>',
    //   to: email,
    //   subject: emailData.subject,
    //   html: emailData.html,
    // });

    console.log('Confirmation email would be sent to:', email);
    console.log('Email content:', emailData);
    
    return { success: true };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error };
  }
}

function generateConfirmationHTML(email: string, position?: number): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Fuse</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: bold; color: #171717; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 8px; }
        .cta { background: #171717; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Fuse</div>
          <p>Autopilot for Engineers</p>
        </div>
        
        <div class="content">
          <h1>Welcome to the Fuse waiting list! 🎉</h1>
          
          <p>Hi there,</p>
          
          <p>Thank you for joining the Fuse waiting list! We're excited to have you on board.</p>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>We'll notify you when Fuse is ready for early access</li>
            <li>You'll get priority access to new features</li>
            <li>Direct communication with our founding team</li>
          </ul>
          
          ${position ? `<p><strong>Your position:</strong> #${position} on the waiting list</p>` : ''}
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Follow our progress on Twitter</li>
            <li>Read our technical blog posts</li>
            <li>Share Fuse with your engineering team</li>
          </ul>
          
          <p>Questions? Just reply to this email - we read every message.</p>
          
          <p>Best regards,<br>The Fuse Team</p>
        </div>
        
        <div class="footer">
          <p>You're receiving this because you signed up for the Fuse waiting list.</p>
          <p>If you didn't sign up, you can safely ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateConfirmationText(email: string, position?: number): string {
  return `
Welcome to the Fuse waiting list! 🎉

Hi there,

Thank you for joining the Fuse waiting list! We're excited to have you on board.

What happens next?
- We'll notify you when Fuse is ready for early access
- You'll get priority access to new features  
- Direct communication with our founding team

${position ? `Your position: #${position} on the waiting list` : ''}

In the meantime, feel free to:
- Follow our progress on Twitter
- Read our technical blog posts
- Share Fuse with your engineering team

Questions? Just reply to this email - we read every message.

Best regards,
The Fuse Team

---
You're receiving this because you signed up for the Fuse waiting list.
If you didn't sign up, you can safely ignore this email.
  `;
}

// Alternative integrations:

// SendGrid
export async function sendWithSendGrid(email: string) {
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // 
  // const msg = {
  //   to: email,
  //   from: 'noreply@yourdomain.com',
  //   subject: "You're on the Fuse waiting list! 🚀",
  //   html: generateConfirmationHTML(email),
  //   text: generateConfirmationText(email),
  // };
  // 
  // await sgMail.send(msg);
}

// Nodemailer (for custom SMTP)
export async function sendWithNodemailer(email: string) {
  // const nodemailer = require('nodemailer');
  // 
  // const transporter = nodemailer.createTransporter({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   secure: true,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });
  // 
  // await transporter.sendMail({
  //   from: 'Fuse <noreply@yourdomain.com>',
  //   to: email,
  //   subject: "You're on the Fuse waiting list! 🚀",
  //   html: generateConfirmationHTML(email),
  //   text: generateConfirmationText(email),
  // });
}
