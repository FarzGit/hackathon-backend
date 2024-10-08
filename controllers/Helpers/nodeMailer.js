import nodemailer from 'nodemailer';


// ***** NODEMAILER TO SEND MAIL TO USERS *****
async function sendEmail( email, html , fromMail = 'farzinahammedabc@gmail.com', subject = 'For Verification OTP') {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: 'farzinahammedabc@gmail.com',
            pass: process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
        from: fromMail,
        to: email,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new Error('Mail Sending Failed')
        } else {
            console.log("Email is to be sented", info.response);
        }
    })
}

export default sendEmail;