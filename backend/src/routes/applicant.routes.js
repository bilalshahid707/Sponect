const express = require("express")
const Router = express.Router()
const controllers = require('../controllers/applicant/applicant.controllers')
const auth = require('../middlewares/auth.middlewares')


Router.patch("/me",auth.protect,controllers.updateApplicant)

module.exports = Router