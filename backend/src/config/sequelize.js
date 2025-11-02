const {Sequelize,DataTypes} = require("@sequelize/core")
const {MySqlDialect} = require("@sequelize/mysql")

console.log(process.env.SEQUELIZE_USER)
const sequelize = new Sequelize({
    dialect:MySqlDialect,
    user:process.env.SEQUELIZE_USER,
    password:process.env.SEQUELIZE_PASS,
    host:'localhost',
    port:3306,
    database:'sponect'
})

module.exports = {sequelize,DataTypes}