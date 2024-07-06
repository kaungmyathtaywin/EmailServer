require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/email', (req, res) => {
    const { name, email, subject, message } = req.body

    console.log(email, subject, message)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_PASS,
        subject: `${name} @${email}: ${subject}`,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString())
        }
        res.send('Your message has been sent. Thank you!')
    })
})

app.listen(port, () => {
    console.log("Server running at port: ", port)
})