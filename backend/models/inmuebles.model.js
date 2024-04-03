const mongoose = require("../config/database");

const schemaInmueble = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    }
})

const inmueble = mongoose.model("inmueble", schemaInmueble);
module.exports = inmueble;