import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    nama: DataTypes.TEXT,
    email: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    kec1: DataTypes.INTEGER,
    kec2: DataTypes.INTEGER,
    kec3: DataTypes.INTEGER,
    kec4: DataTypes.INTEGER,
    kec5: DataTypes.INTEGER,
    kec6: DataTypes.INTEGER,
    kec7: DataTypes.INTEGER,
    kec8: DataTypes.INTEGER,
    kec9: DataTypes.INTEGER,
    valid: DataTypes.TEXT,
    refer: DataTypes.TEXT

}, {
    freezeTableName: true
})

export default User;

(async () => {
    await db.sync();
})();