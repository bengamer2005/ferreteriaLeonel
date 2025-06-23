const mongoose = require("mongoose")

const DirectorySchema = new mongoose.Schema({
    clientName: {
        type: String,
        require: true
    },
    clientTel: {
        type: String,
        require: true
    },
    clientDir: {
        type: String,
        require: true
    },
    clientExtraInfo: {
        type: String,
    }
})

module.exports = mongoose.model("Directory", DirectorySchema)