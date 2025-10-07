import AppError from "../utils/AppError";


const sendErrorDev = (err:any,req:any,res:any,next:any)=>{
    res.status(err.statusCode).json({
        status:err.status,
        error:err,
        message:err.message
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
            status:'fail',
            message:'something went wrong'
        })
    }
}

const errorMiddleware = (err:any,req:any,res:any,next:any)=>{

    if (process.env.NODE_ENV==="development"){
        sendErrorDev(err,req,res,next)
    }else{
        sendErrorProd(err,req,res,next)
    }
}

export default errorMiddleware