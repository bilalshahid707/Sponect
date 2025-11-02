const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorMiddleware");

// Importing routers
const authRouter = require("./routes/auth.routes");

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))

// Body Parser
app.use(cookieParser())
app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:'10kb'}))

// Header security
app.use(helmet())

// app.use(sanitize({
//     onSanitize: ({ req, key }) => {
//       console.warn(`This request[${key}] is sanitized`, req);
//     }
// }))


// Using routers
// app.use("/api/v1/waitlist",waitListRouter)
app.use("/api/v1/auth",authRouter)


app.use(errorHandler)

module.exports = app
