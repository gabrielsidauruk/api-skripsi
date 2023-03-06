import { Sequelize } from "sequelize";

const db = new Sequelize('sistem-pakar-skripsi','postgres','gabrielsidauruk',{
    host:'localhost',
    dialect:'postgres'
});

export default db;