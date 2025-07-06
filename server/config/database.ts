import dotenv from 'dotenv';
dotenv.config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL)
export default sequelize