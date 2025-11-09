const express = require("express")
const Router = express.Router()
const controller = require("../controllers/user/user.controllers")
const auth = require('../middlewares/auth.middlewares')

Router.get("/me",auth.protect,controller.getUser)
Router.patch("/me",auth.protect,controller.updateUser)

module.exports = Router