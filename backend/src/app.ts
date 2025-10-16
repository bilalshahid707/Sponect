import express from "express"
import cors from "cors"
import helmet from "helmet"
import sanitize  from "express-mongo-sanitize"
import cookieParser from "cookie-parser"
import errorHandler from "./middleware/errorMiddleware"

// Importing routers
import waitListRouter from "./routes/waitListRoute"

export const app = express()


app.use(cors({
    origin: "*",
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
app.use("/api/v1/waitlist",waitListRouter)


app.use(errorHandler)

export default app