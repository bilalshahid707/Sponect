import AppError from "../utils/AppError";


const handleDuplicateFieldsError = (err:any)=>{
    const key = Object.keys(err.keyPattern)[0]
    const value = err.keyValue[key]

    const msg = `${key}: ${value} already exists`

    return new AppError(msg,409)

}


const sendErrorDev = (err:any,req:any,res:any,next:any)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err
    })
}

const sendErrorProd = (err:any,req:any,res:any,next:any)=>{
    if (err.isOperational){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        })
    }else{
        console.log(err,err.message)
        res.status(500).json({
            status:'error',
            message:'something went wrong'
        })
    }
}

const errorMiddleware = (err:any,req:any,res:any,next:any)=>{

    if (err.code===11000) err=handleDuplicateFieldsError(err)

    if (process.env.NODE_ENV==="development"){
        sendErrorDev(err,req,res,next)
    }else{
        sendErrorProd(err,req,res,next)
    }
}

export default errorMiddleware