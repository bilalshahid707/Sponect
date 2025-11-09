const { sequelize, DataTypes } = require("../config/sequelize.js"); // your Sequelize instance
const User = require("./user.model.js");

const Applicant = sequelize.define(
    "Applicant",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        organizationName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        organizationDescription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        teamSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        socialLinks: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profileImage: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
    },
    {
        tableName: "applicants",
        timestamps: true,
        underscored: true,
    }
);

// Association: 1 User → 1 Applicant
User.hasOne(Applicant, {foreignKey:{name:"userId",onDelete:"CASCADE",onUpdate:"CASCADE"}});

module.exports = Applicant
