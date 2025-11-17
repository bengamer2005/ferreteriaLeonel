const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const CatalogoTipoTelefono = sequelize.define("CatalogoTipoTelefono", {
    idCatalogoTipoTelefono: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "catalogoTipoTelefono"
})

module.exports = CatalogoTipoTelefono