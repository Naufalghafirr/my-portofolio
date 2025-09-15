import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or configure SMTP
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  try {
    const mailOptions = {
      from: email,
      to: 'naufalghafir123@gmail.com',
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; background: #f9f9f9; border-left: 4px solid #4CAF50;">
            ${message}
          </div>
          <hr style="margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">This message was sent from your portfolio contact form.</p>
        </div>
      `
    };
    
    
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending email', error });
  }
}