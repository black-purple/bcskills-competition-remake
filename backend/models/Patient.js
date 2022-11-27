import { DataTypes } from "sequelize";
import { db } from "../db/dbConnection.js";
import { Treatment } from "./Treatment.js";

const Patient = db.define("Patient", {
    folderid: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cin: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY
    },
    sexe: {
        type: DataTypes.ENUM("H", "F")
    },
    profession: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    ssn: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.STRING
    },
    guardian: {
        type: DataTypes.STRING
    },
    insurance: {
        type: DataTypes.STRING
    },
    alerts: {
        type: DataTypes.STRING
    },
    archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, { freezeTableName: true });

Patient.hasMany(Treatment);
export { Patient };