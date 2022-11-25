import { DataTypes } from "sequelize";
import { db } from "../db/dbConnection.js";
import Patient from "./Patient.js";

const Treatment = db.define("Treatment", {
    traitementid: {
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
    }
}, { freezeTableName: true });

Treatment.belongsTo(Patient);
Treatment.sync();
export default Treatment;