// modelos
const Ferreterias = require("../models/ferreteriaInfoModel")
const TelefonosFerreteria = require("../models/telefonosFerreteriaModel")
const CatalogoTipoTelefono = require("../models/catalogoTipoTelefonoModel")
const DB = require("../config/connectDB")

// obtiene toda la informacion de una ferreteria
const getAllInfoFerreteria = async (req, res) => {
    try {
        // obtenemos toda la informacion de las ferreterias activas
        const ferreteriasInfo = await Ferreterias.findAll({
            where: {activo: 1}
        })

        // obtenemos todos los numeros de las ferreterias con su tipo y que esten activas
        const ferreteriaTel = await DB.query(`
            select 
                tf.idTelefonosFerreteria,
                tf.idFerreteria,
                ct.nombre,
                tf.telefono
            from [dbo].[telefonosFerreteria] tf
            inner join [dbo].[catalogoTipoTelefono] ct on ct.idCatalogoTipoTelefono = tf.idCatalogoTipoTelefono
            where tf.activo = 1
        `, {
            type: DB.QueryTypes.SELECT
        })

        res.status(200).json({ferreteriasInfo, ferreteriaTel})
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al obtener la info y tel de las ferreterias, error: ", error})
    }
}

module.exports = {
    getAllInfoFerreteria
}