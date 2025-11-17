const router = require("express").Router()
const { newProduct, allProducts } = require("../controllers/productosController")

router.post("/new", newProduct)
router.get("/getAll", allProducts)

module.exports = router