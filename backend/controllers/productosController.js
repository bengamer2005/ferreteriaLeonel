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

// obtiene todos los productos
const allProducts = async (req, res) => {
    try {
        const page = req.query.type
        let type

        switch (page) {
            case "materiales":
                type = 1
            break
        
            case "ferreteria":
                type = 2
            break

            default:
                type = 3
            break
        }

        if(type === 3) {
            return res.status(404).json({message: "Tipo de producto no soportado."})
        }

        // llama a todos los productos de dependiendo el tipo
        const allProductType = await productos.findAll({
            where: { idTipoMaterial: type, activo: 1}
        })

        res.status(200).json({allProductType})
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al llamar a todos los productos, error: ", error: error.message})
    }
}

module.exports = {
    newProduct,
    allProducts
} 