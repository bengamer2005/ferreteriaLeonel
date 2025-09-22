const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const Pedidos = sequelize.define("Pedidos", {
    idPedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    estado: {
        type: DataTypes.ENUM("pendiente", "procesando", "enviado", "entregado", "cancelado"), 
        defaultValue: "pendiente"
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "pedidos"
})

module.exports = Pedidos