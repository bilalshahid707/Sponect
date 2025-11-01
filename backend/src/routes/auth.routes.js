const express = require("express")
const Router = express.Router()
const controllers = require('../controllers/auth/auth.Controllers')

Router.post("/signup",controllers.signup)
Router.post("/signin",controllers.signin)

module.exports = Router