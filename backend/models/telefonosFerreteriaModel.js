const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const TelefonosFerreteria = sequelize.define("TelefonosFerreteria", {
    idTelefonosFerreteria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idFerreteria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCatalogoTipoTelefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "telefonosFerreteria"
})

module.exports = TelefonosFerreteria