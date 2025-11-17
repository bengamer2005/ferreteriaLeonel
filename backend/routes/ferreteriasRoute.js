const router = require("express").Router()
const { getAllInfoFerreteria } = require("../controllers/ferreteriaInfoController")

router.get("/info", getAllInfoFerreteria)

module.exports = router