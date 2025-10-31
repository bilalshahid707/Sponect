const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host:"sandbox.smtp.mailtrap.io",
  port:2525,
  auth:{
    user:process.env.MAILTRAP_USER,
    pass:process.env.MAILTRAP_PASSWORD
  }
});

const sendMail = async(user,subject,html)=>{
    const mailOptions={
        from:process.env.MAILTRAP_SENDER_MAIL,
        to:user.email,
        subject:subject,
        text:html
    }

    transporter.sendMail(mailOptions)
}
module.exports = sendMail