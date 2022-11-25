import { Sequelize } from "sequelize";

const sequelize = new Sequelize('healthcaredb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export { sequelize as db }