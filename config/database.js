import { Sequelize } from "sequelize";
import pg from "pg";

const db = new Sequelize('bnj1oun0ufiikmweczhj', 'urtphz16jxw2cvaofmxa', 'IlKZ958UPu3ePzMCTaeNTuhZgddw2K', {
    host: 'bnj1oun0ufiikmweczhj-postgresql.services.clever-cloud.com',
    dialect: 'postgres',
    logging: false
});

export default db;