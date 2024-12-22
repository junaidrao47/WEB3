const nodemailer = require('nodemailer');

// Looking to send emails in production? Check out our Email API/SMTP product!
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  // service: 'Gmail',

  auth: {
    user: "80c1796382b209",
    pass: "a8b664f0ba9e17"
  }
});

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: parseInt(process.env.SMTP_PORT),
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//     }
// });

exports.sendVerificationCode = async (email, name, code) => {
    if (!email || !name || !code) {
        throw new Error('Missing required parameters for email verification');
    }

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Email Verification Code',
        text: `Your verification code is: ${code}`,
        html: `
            <h1>Welcome ${name}!</h1>
            <p>Your verification code is: <strong>${code}</strong></p>
            <p>This code will expire in 10 minutes.</p>
        `
    };

    return await transporter.sendMail(mailOptions);
};