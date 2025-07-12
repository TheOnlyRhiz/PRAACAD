import nodemailer from 'nodemailer';

// Create Gmail SMTP transporter for sending real emails
const createTransporter = () => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail credentials not found. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
};

export interface EnrollmentEmailData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  experienceLevel: string;
}

export interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEnrollmentEmail(data: EnrollmentEmailData) {
  try {
    const transporter = createTransporter();

    const emailContent = `
A User is Interested in Enrolling for a Course

This person has submitted an enrollment application through your website and is interested in joining Practicode Academy.

Student Details:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- Course Interested In: ${data.course}
- Experience Level: ${data.experienceLevel}

Please contact this prospective student to discuss enrollment details and next steps.

---
Practicode Academy
Ibadan, Nigeria
    `.trim();

    const mailOptions = {
      from: `"Practicode Academy Website" <${process.env.GMAIL_USER}>`,
      to: 'practicodeacademy@gmail.com',
      subject: `User Interested in Enrollment: ${data.course} - ${data.fullName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #fbbf24; margin-bottom: 20px;">A User is Interested in Enrolling for a Course</h2>
          
          <p style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
            This person has submitted an enrollment application through your website and is interested in joining Practicode Academy.
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Student Details</h3>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p><strong>Course Interested In:</strong> ${data.course}</p>
            <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
          </div>
          
          <p>Please contact this prospective student to discuss enrollment details and next steps.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Practicode Academy<br>
            Ibadan, Nigeria
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Enrollment email sent successfully to practicodeacademy@gmail.com');
    console.log('Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    return { success: false, error: String(error) };
  }
}

export async function sendContactEmail(data: ContactEmailData) {
  try {
    const transporter = createTransporter();

    const emailContent = `
This Person Would Love You to See This - An Enquiry

Someone has reached out to you through your website contact form with a message/enquiry.

Contact Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Subject: ${data.subject}

Message:
${data.message}

---
Practicode Academy
Ibadan, Nigeria
    `.trim();

    const mailOptions = {
      from: `"Practicode Academy Website" <${process.env.GMAIL_USER}>`,
      to: 'practicodeacademy@gmail.com',
      subject: `Enquiry/Message: ${data.subject} - ${data.firstName} ${data.lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #fbbf24; margin-bottom: 20px;">This Person Would Love You to See This - An Enquiry</h2>
          
          <p style="background-color: #e1f5fe; padding: 15px; border-radius: 8px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
            Someone has reached out to you through your website contact form with a message/enquiry.
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Practicode Academy<br>
            Ibadan, Nigeria
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully to practicodeacademy@gmail.com');
    console.log('Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: String(error) };
  }
}