import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DEV_DATABASE_URL } = process.env;

const sequelize = new Sequelize(DEV_DATABASE_URL);

export default sequelize;
global.sequelize = sequelize;
