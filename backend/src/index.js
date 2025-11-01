const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')
const mongoose = require('mongoose')

const app = require('./app')
const mongoose = require('mongoose')
const {sequelize} = require('./config/sequelize')

const startServer = async()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is listening at port ${process.env.PORT || 3000}`)
    }).on("error",(err)=>{
        console.log("Error starting server")
        console.log(err)
        process.exit(1)
    })  
}

sequelize.authenticate().then(()=>{
    console.log("Sequelize connection established")
    sequelize.sync({force:true}).then(()=>{
        console.log("Sequelize tables synchronized")
    })
    startServer()
}).catch((err)=>{
    console.log("Sequelize connection failed")
    console.log(err)
})

// Handling Uncaught Exceptions and Unhandled Rejections
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
process.on('unhandledRejection', (err) => {
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