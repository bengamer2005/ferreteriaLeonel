const express = require("express")
const router = express.Router()
const { createClient, getAllClients, getClient, updateClient, deleteClient } = require("../controller/directoryController")

router.post("/create", createClient)
router.get("/getAll", getAllClients)
router.get("/get/:id", getClient)
router.put("/update/:id", updateClient)
router.delete("/delete/:id", deleteClient)

module.exports = router