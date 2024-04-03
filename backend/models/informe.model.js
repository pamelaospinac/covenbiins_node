const mongoose = require("../config/database");

const schemaInforme = new mongoose.Schema({
    nombreInforme: {
        type: String,
        required: true,
    }
});

const informe = mongoose.model("informe", schemaInforme);
module.exports = informe;