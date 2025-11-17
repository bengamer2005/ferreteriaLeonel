const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const Ferreterias = sequelize.define("Ferreterias", {
    idFerreteria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lat: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
    },
    lon: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
    },
    dirUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "ferreterias"
})

module.exports = Ferreterias