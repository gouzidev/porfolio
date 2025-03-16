const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String},
        message: {type: String},
        ip: {type: String},
        timestamp : {type : Number}
    }
)

module.exports = mongoose.model("Contact", ContactSchema)