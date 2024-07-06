require('dotenv').config()
const nodemailer = require('nodemailer')


export default (req, res) => {
    const { name, email, subject, message } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `${name} @${email}: ${subject}`,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString())
        }
        res.send('Your message has been sent. Thank you!')
    })
}