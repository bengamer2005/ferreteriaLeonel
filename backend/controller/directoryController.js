const Directory = require("../model/directoryModel")

// registrar un nuevo cliene 
const createClient = async (req, res) => {
    try {
        const { clientName, clientTel, clientDir, clientExtraInfo } = req.body

        if(!clientName || !clientTel || !clientDir) {
            res.status(403).json({messege: "Faltan datos para registrar"})
        }

        const newClient = await Directory.create(req.body)
        res.status(200).json(newClient)
    } catch (error) {
        res.status(500).json({error: messege.error})
    }
}

// llama a todos los clientes registrados
const getAllClients = async (req, res) => {
    try {
        const clients = await Directory.find({})
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error: messege.error})
    }
}

// llama a un client en especifico 
const getClient = async (req, res) => {
    try {
        const client = await Directory.findById(req.params.id)

        if(!client) {
            res.status(404).json({messege: "No se encontro al cliente"})
        }

        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({error: messege.error})
    }
}

// edita a un cliente en especifico
const updateClient = async (req, res) => {
    try {
        const updateClient = await Directory.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if(!updateClient) {
            res.status(404).json({messege: "No se encontro al cliente para actualizar"})
        }

        res.status(200).json({messege: "Cliente actualizado: ", updateClient})
    } catch (error) {
        res.status(500).json({error: messege.error})
    }
}

// elimina a un cliente en especifico
const deleteClient = async (req, res) => {
    try {
        const deleteClient = await Directory.findByIdAndDelete(req.params.id)

        if(!deleteClient) {
            res.status(404).json({messege: "Cliente no encontrado"})
        }

        res.status(200).json({messege: "Cliente eliminado correctamente"})
    } catch (error) {
        res.status(500).json({error: messege.error})
    }
}

module.exports = {
    createClient,
    getAllClients,
    getClient,
    updateClient,
    deleteClient
}