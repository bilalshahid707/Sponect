const User = require('../models/user.model')
const catchAsync = require('../utils/CatchAsync')
const AppError = require('../utils/AppError')

const jwt = require("jsonwebtoken")

exports.protect = catchAsync(async (req, res, next) => {

    // Accessing token
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1]
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt
    }
    if (!token) {
        return next(new AppError("You are not logged in", 401))
    }

    // Verifying and decoding token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    let currentUser = null
    if (decoded) {
        currentUser = await User.findOne({ where: { id: decoded.userId } })
        if (!currentUser) {
            return next(new AppError("User does not exist", 404))
        }
    
        if (currentUser.passwordChangedAt &&
            currentUser.passwordChangedAt.getTime() / 1000 > decoded.iat) {
            return next(new AppError("Password Changed", 401))
        }
    }

    req.user = currentUser
    next()
})