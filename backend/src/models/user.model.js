const {sequelize,DataTypes} = require('../config/sequelize')
const bcrypt = require("bcryptjs")

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        set(value){
            this.setDataValue('email',value.toLowerCase())
        },
        validate:{
            isEmail:true
        }
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isNumeric:true
        }
    },
    accountType:{
        type:DataTypes.ENUM("applicant","sponsor"),
        allowNull:false
    },
    organizationName:{
        type:DataTypes.STRING,
        allowNull:false,
        set(value){
            this.setDataValue('organizationName',value.toLowerCase())
        }
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        set(value){
            this.setDataValue('role',value.toLowerCase())
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    hooks:{
        async beforeSave(user){
            if (user.changed('password')){
                user.password = await bcrypt.hash(user.password,12)
            }
        }
    },
    tableName:'users'
})

module.exports = User