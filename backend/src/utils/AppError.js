class AppError extends Error {

    constructor(message,statusCode) {
        super(message)
        console.log(this.statusCode)
        this.statusCode= statusCode || 500
        this.status = `${this.statusCode}`.startsWith("4")?"fail":"error"
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError