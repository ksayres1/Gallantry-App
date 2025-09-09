import nodemailer from 'nodemailer';

// Gmail SMTP configuration for Squarespace email
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your Gmail address
    pass: process.env.SMTP_PASS, // your Gmail app password
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Gallantry" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.SMTP_USER,
    });

    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
}

// Email templates
export const generateTourRequestEmail = (data: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #DC2626;">New Gallantry Tour Request</h2>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Organization Details</h3>
      <p><strong>Organization:</strong> ${data.orgName}</p>
      <p><strong>Contact:</strong> ${data.contactName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    </div>

    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Location & Event Details</h3>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>State/Region:</strong> ${data.state}</p>
      <p><strong>Country:</strong> ${data.country || 'USA'}</p>
      <p><strong>Estimated Attendance:</strong> ${data.estAttendance || 'Not specified'}</p>
      <p><strong>Preferred Dates:</strong> ${data.preferredDates || 'Flexible'}</p>
      <p><strong>Venue:</strong> ${data.venue || 'TBD'}</p>
    </div>

    ${data.notes ? `
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Additional Notes</h3>
      <p>${data.notes}</p>
    </div>
    ` : ''}

    <p style="color: #666; font-size: 14px;">
      Submitted: ${new Date().toLocaleString()}<br>
      From: Gallantry Website Tour Request Form
    </p>
  </div>
`;

export const generateRoundtableEmail = (data: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #DC2626;">New BOARD Group Hosting Inquiry</h2>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>State/Region:</strong> ${data.state}</p>
    </div>

    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Hosting Details</h3>
      <p><strong>Meeting Preference:</strong> ${data.preferInPerson ? 'In-person meetings preferred' : 'Virtual meetings acceptable'}</p>
      <p><strong>Availability:</strong> ${data.availability}</p>
      ${data.experience ? `<p><strong>Experience:</strong> ${data.experience}</p>` : ''}
      ${data.churchAffiliation ? `<p><strong>Church Affiliation:</strong> ${data.churchAffiliation}</p>` : ''}
    </div>

    <p style="color: #666; font-size: 14px;">
      Submitted: ${new Date().toLocaleString()}<br>
      From: Gallantry Website Roundtable Hosting Form
    </p>
  </div>
`;

export const generateKOSRemindersEmail = (data: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #DC2626;">New KOS Briefing Reminders Subscription</h2>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Subscriber Information</h3>
      <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>SMS Opt-in:</strong> ${data.smsOptIn ? 'Yes - wants SMS reminders' : 'No - email only'}</p>
    </div>

    <p style="color: #666; font-size: 14px;">
      Submitted: ${new Date().toLocaleString()}<br>
      From: Gallantry Website KOS Briefings Page
    </p>
  </div>
`;

export const generateContactEmail = (data: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #DC2626;">New Contact Form Submission</h2>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Contact Information</h3>
      <p><strong>Topic:</strong> ${data.topic}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    </div>

    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Message</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>

    <p style="color: #666; font-size: 14px;">
      Submitted: ${new Date().toLocaleString()}<br>
      From: Gallantry Website Contact Form
    </p>
  </div>
`;