const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.sweetdesign.pasteleria@gmail.com',
                pass: 'Suricata2017'
            }

        })
        /*  const transporter = nodemailer.createTransport({
             host: 'smtp.sweetdesign.com.ar',
             port: 25,
             // secure : false,
             auth: {
                 user: 'info@sweetdesign.com.ar',
                 pass: 'Suricata2017'
             }

         }) */



    const mailOptions = {
        from: req.body.email,
        to: 'info.sweetdesign.pasteleria@gmail.com',
        subject: `Mensaje de ${req.body.nombre} con mail ${req.body.email} : ${req.body.asunto}`,
        text: req.body.mensaje
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send('Error');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Mensaje enviado');
        }
    })



})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})