const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/ferreteriaLeonel")
    .then(() => {
        console.log("MongoDB conectado")
    }).catch(error => console.error(error))
}

module.exports = connectDB