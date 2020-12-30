// const nodemailer = require("nodemailer");
// async function sendMailToNewUser(user) {

//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'chayalenicht@gmail.com',
//             pass: '0583236069'
//         }
//     });

//     var mailOptions = {
//         //from: 'shirasw@gmail.com',
//         to: user.mail,
//         subject: '   wellcome to atra!!!!',
//         text: 'That was easy!'
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(`error ${error}`);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });


// }
// sendMailToNewUser();

// module.exports = { sendMailToNewUser };