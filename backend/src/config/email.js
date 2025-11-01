const nodemailer = require("nodemailer")
const fs = require('fs')
const path = require("path")
const ejs = require('ejs')
const transporter = nodemailer.createTransport({
  host:"sandbox.smtp.mailtrap.io",
  port:2525,
  auth:{
    user:process.env.MAILTRAP_USER,
    pass:process.env.MAILTRAP_PASSWORD
  }
});

const sendMail = async(user,data,templateName)=>{

    const htmlfile = fs.readFileSync(path.join(__dirname,`../templates/${templateName}.html`),'utf-8')
    const renderedHtml = ejs.render(htmlfile,data.body) //Using ejs for rendering html with data
    const mailOptions={
        from:process.env.MAILTRAP_SENDER_MAIL,
        to:user.email,
        subject:data.subject,
        html:renderedHtml
    }

    transporter.sendMail(mailOptions)
}
module.exports = sendMail