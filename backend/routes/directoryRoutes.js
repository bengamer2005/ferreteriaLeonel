const express = require("express")
const router = express.Router()
const { createClient, getAllClients, getClient, updateClient, deleteClient } = require("../controller/directoryController")

router.post("/create", createClient)
router.get("/getAll", getAllClients)
router.get("/get", getClient)
router.put("/update", updateClient)
router.delete("/delete", deleteClient)

module.exports = router