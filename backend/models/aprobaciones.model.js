const mongoose = require("../config/database");

const schemaAprobacion = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
    },
});