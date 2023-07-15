const nodemailer = require('nodemailer');

// Controller for sending contact email
 const sendContactEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'salem.dahmani345@gmail.com', // Update with your Gmail address
      pass: 'kskvwulzpwpgbssq', // Update with your Gmail password or an app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'salem.dahmani345@gmail.com', // Update with your Gmail address
    to: 'salem.dahmani345@gmail.com', // Update with the recipient's email address
    subject: `Contact Form Submission - ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};

module.exports = {
  sendContactEmail,
};
