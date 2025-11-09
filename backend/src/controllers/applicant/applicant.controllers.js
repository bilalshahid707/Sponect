const Applicant = require('../../models/applicant.model')
const catchAsync = require('../../utils/CatchAsync')
const AppError = require('../../utils/AppError')


exports.updateApplicant = catchAsync(async (req, res, next) => {
    const { id: userId } = req.user

    const allowedFields = [
        'organizationName',
        'organizationDescription',
        'teamSize',
        'website',
        'socialLinks',
        'category',
        'profileImage',
        'industry'
    ];
    const keys = Object.keys(req.body).filter(key => allowedFields.includes(key))
    const filteredBody = {}
    keys.forEach(key => {
        filteredBody[key] = req.body[key]
    })

    const applicant = await Applicant.findOne({where:{userId:userId}})
    if(!applicant){
        return next(new AppError("no applicant found with this user id",404))
    }
    await applicant.update(filteredBody)

    res.status(200).json({
        status:"success",
        data:applicant
    })

})