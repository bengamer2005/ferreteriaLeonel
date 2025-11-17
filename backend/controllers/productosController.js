const productos = require("../models/productosModel")
const DB = require("../config/connectDB")

// dar de alta productos
const newProduct = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, categoria } = req.body

        // lanzamos error si no cuenta con todos los campos
        if(!nombre || !descripcion || !precio || !stock || !categoria) {
            return res.status(400).json({message: "Faltan campos obligatorios"})
        }

        // lanzamos error si algun producto ya cuenta con ese nombre
        const productData = await productos.findOne({
            where: { nombre: nombre }
        })

        if(productData) {
            return res.status(400).json({message: "Producto ya existente"})
        }

        // hacemos el post del producto
        const producto = await productos.create({ nombre, descripcion, precio, stock, categoria })

        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al registrar un producto, error: ", error})
    }
}

module.exports = {
    newProduct
} 