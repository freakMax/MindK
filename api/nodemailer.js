const nodemailer = require('nodemailer');
const config = require('./config');

const transporter = nodemailer.createTransport(
    {
    host: config.getValue('hostmailer'),
    post: config.getValue('post'),
    secure: config.getValue('secure'),
    auth: {
        user: config.getValue('mailerLogin'),
        pass: config.getValue('mailerPassword')
    }
},
{
    from: `Youngsters mailer ${config.getValue('mailerLogin')}`
}
);

module.exports = message => {
    transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    });
}