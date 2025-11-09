const express = require("express")
const Router = express.Router()
const controllers = require('../controllers/sponsor/sponsor.controllers')
const auth = require('../middlewares/auth.middlewares')


Router.patch("/me",auth.protect,controllers.updateSponsor)
module.exports = Router