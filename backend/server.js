const express = require("express")
const app = express()
app.use(express.json())

// conectamos la base de datos
const conncectDB = require("./config/connectDB")
conncectDB()

// creamos los endpoint a utilizar 
const directoryRoute = require("./routes/directoryRoutes")
app.use("/directory", directoryRoute)

// le asignamos un puerto al servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto: ", PORT)
})