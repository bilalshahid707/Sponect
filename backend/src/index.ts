import app from "./app";
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const startServer = async()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is listening at port ${process.env.PORT || 3000}`)
    }).on("error",(err)=>{
        console.log("Error starting server")
        console.log(err)
        process.exit(1)
    })  
}

// Database connection
const mongoUri = process.env.MONGO_URI 
if (!mongoUri){
    console.log("MONGO_URI not defined")
    process.exit(1)
}
mongoose.connect(mongoUri).then(()=>{
    console.log("db connection successful")
    startServer()
}).catch((err)=>{
    console.log("db connection failed")
    console.log(err)
})

// Handling Uncaught Exceptions and Unhandled Rejections
process.on('uncaughtException', (err:Error) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
process.on('unhandledRejection', (err:Error) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED. Shutting down gracefully');
    mongoose.connection.close().then(() => {
      console.log('💥 Process terminated!');
      process.exit(0);
    }).catch(err=>{ 
        console.log("Error while closing mongoose connection");
        console.log(err);
        process.exit(1);
    });
   
});