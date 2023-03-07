import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import pg from "pg";

dotenv.config()
const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
});

export default db;