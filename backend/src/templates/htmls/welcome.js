const mjmltohtml = require('mjml')
const fs = require("fs")
const mjmlFile = fs.readFileSync('../templates/mjmls/welcome.mjml','utf-8')

const welcomeHTML = (user)=>{
    const filledmjml = mjmlFile.replaceAll("[[CompanyName]]","Sponect").replaceAll("[[email]]",user.email).replaceAll("[[FullName]]",user.fullName)
    const {html} = mjmltohtml(filledmjml)
    return html
}

module.exports = welcomeHTML
