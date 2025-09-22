const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config({ path: "./.env" })

// importamos los modelos de las tablas
const Usuarios = require("./models/usuariosModel")
const Productos = require("./models/productosModel")
const Pedidos = require("./models/pedidosModel")
const PedidosDetalle = require("./models/pedidosDetalleModel")

// hacemos la conexion con la base de datos
const sequelize = require("./config/connectDB")

async function DBConnect() {
    try {
        await sequelize.authenticate()
        console.log("Se conecto correctamente a la Base de Datos")

        // await sequelize.sync({ alter: true })
        // console.log("Se crearon/ajustaron las tablas")        
    } catch (error) {
        console.error("Error al tratar de conectarse a la Base de Datos: ", error)        
    }
}

DBConnect()

// corremos el servidor en un puerto
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)    
})