const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
require("dotenv").config({ path: "./.env" })

// usamos cors para solo admitir peticiones del frontend
app.use(cors({
    origin: process.env.FRONTEND
}))

// importamos los modelos de las tablas
const Usuarios = require("./models/usuariosModel")
const Productos = require("./models/productosModel")
const Pedidos = require("./models/pedidosModel")
const PedidosDetalle = require("./models/pedidosDetalleModel")
const Ferreterias = require("./models/ferreteriaInfoModel")
const TelefonosFerreteria = require("./models/telefonosFerreteriaModel")
const CatalogoTipoTelefono = require("./models/catalogoTipoTelefonoModel")
const CatalogoTipoMaterial = require("./models/catalogoTipoMaterial")

// definimos las relaciones
Usuarios.hasMany(Pedidos, { foreignKey: "idUsuario" })
Pedidos.belongsTo(Usuarios, { foreignKey: "idUsuario" })

Pedidos.hasMany(PedidosDetalle, { foreignKey: "idPedido" })
PedidosDetalle.belongsTo(Pedidos, { foreignKey: "idPedido" })

Productos.hasMany(PedidosDetalle, { foreignKey: "idProducto" })
PedidosDetalle.belongsTo(Productos, { foreignKey: "idProducto" })

Ferreterias.hasMany(TelefonosFerreteria, { foreignKey: "idFerreteria" })
TelefonosFerreteria.belongsTo(Ferreterias, { foreignKey: "idFerreteria" })

CatalogoTipoTelefono.hasMany(TelefonosFerreteria, { foreignKey: "idCatalogoTipoTelefono" })
TelefonosFerreteria.belongsTo(CatalogoTipoTelefono, { foreignKey: "idCatalogoTipoTelefono" })

// hacemos la conexion con la base de datos
const DB = require("./config/connectDB")

async function DBConnect() {
    try {
        await DB.authenticate()
        console.log("Se conecto correctamente a la Base de Datos")

        await DB.sync()
        console.log("Se crearon/ajustaron las tablas")        
    } catch (error) {
        console.error("Error al tratar de conectarse a la Base de Datos: ", error)        
    }
}

DBConnect()

// llamamos a todas las rutas
const userRoute = require("./routes/usuarioRoute")
const ferreteriaRoute = require("./routes/ferreteriasRoute")
const productosRoute = require("./routes/productosRoute")

// exponemos los endpoints
app.use("/materialesLeonel/usuario", userRoute)
app.use("/materialesLeonel/ferreteria", ferreteriaRoute)
app.use("/materialesLeonel/productos", productosRoute)

// corremos el servidor en un puerto
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)    
})