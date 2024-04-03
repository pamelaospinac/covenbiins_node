const mongoose = require("../config/database");

const schemaCita = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
        mensaje: String,
    }
})

const cita = mongoose.model("producto", schemaCita);
module.exports = cita;