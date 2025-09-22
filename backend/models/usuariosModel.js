const { DataTypes } = require("sequelize")
const sequelize = require("../config/connectDB")

const Usuarios = sequelize.define("Usuarios", {
    idUsuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM("cliente", "admin"), 
        defaultValue: "cliente"
    }
}, {
    timestamps: true,
    tableName: "usuarios"
})

module.exports = Usuarios