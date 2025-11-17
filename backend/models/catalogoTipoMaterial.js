const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const CatalogoTipoMaterial = sequelize.define("CatalogoTipoMaterial", {
    idCatalogoTipoMaterial: {
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
    tableName: "catalogoTipoMaterial"
})

module.exports = CatalogoTipoMaterial