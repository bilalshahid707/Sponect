const {Sequelize,DataTypes} = require("@sequelize/core")
const {MySqlDialect} = require("@sequelize/mysql")

const sequelize = new Sequelize({
    dialect:MySqlDialect,
    user:"root",
    password:'bilal9002',
    host:'localhost',
    port:3306,
    database:'sponect'
})

module.exports = {sequelize,DataTypes}