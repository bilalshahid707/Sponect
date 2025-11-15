const express = require("express")
const Router = express.Router()
const controllers = require('../controllers/applicant/applicant.controllers')
const auth = require('../middlewares/auth.middlewares')
const uploadMiddleware = require('../middlewares/upload.middlewares');
const multerUpload = require("../config/multer");

Router.get("/me",auth.protect,controllers.getApplicant)
Router.patch("/me",auth.protect,multerUpload.single("profileImage"),uploadMiddleware.uploadFile,controllers.updateApplicant)

module.exports = Router