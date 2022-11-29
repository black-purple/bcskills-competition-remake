import { DataTypes } from "sequelize";
import { db } from "../db/dbConnection.js";

const Treatment = db.define("Treatment", {
    treatmentid: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    doctorname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    consultationdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    consultationdetails: {
        type: DataTypes.STRING,
    },
    conclusion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    decision: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patient: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true });

export { Treatment };