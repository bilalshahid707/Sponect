const User = require('../../models/user.model')
const catchAsync = require('../../utils/CatchAsync')
const AppError = require('../../utils/AppError')

exports.getUser = catchAsync(async (req, res, next) => {
    const { id } = req.user

    const user = await User.findByPk(id)

    res.status(200).json({
        status: 'success',
        data: user
    })
})

exports.updateUser = catchAsync(async (req, res, next) => {

    const { id } = req.user

    const allowedFields = ["email", "fullName", "phone", "designation", "profileImage"]
    const keys = Object.keys(req.body).filter(key => allowedFields.includes(key))
    const filteredBody = {}
    keys.forEach(key => {
        filteredBody[key] = req.body[key]
    })
    // setting profile image
    if(req.image){
        filteredBody["profileImage"]=req.image
    }

    const user = await User.findOne({ where: { id: id } })
    if (!user) {
        return next(new AppError("No user with this id exists", 404))
    }
    await user.update(filteredBody)

    res.status(200).json({
        status: "success",
        data: user
    })

})