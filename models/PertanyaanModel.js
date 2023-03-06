import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Pertanyaan = db.define('pertanyaan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Pertanyaan: DataTypes.STRING,
    keyKecerdasan: DataTypes.STRING

}, {
    freezeTableName: true,
    timestamps: false
})

export default Pertanyaan;

(async () => {
    await db.sync();
})();