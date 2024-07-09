const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bjorn221b@gmail.com', // Replace with your email address
        pass: '009900bj', // Replace with your email password or app password
    },
});

app.post('/book', (req, res) => {
    const mailOptions = {
        from: 'bjorn221b@gmail.com', // Replace with your email address
        to: req.body.email,
        subject: 'Booking Confirmation',
        text: `Thank you for your booking, ${req.body['full-name']}.
        Here are your booking details:
        Route: LHR-DUB with PIA
        Date: Sat, 30 March
        Type: Direct
        Number of Seats: ${req.body.seats}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.send('Booking confirmed! A confirmation email has been sent.');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
