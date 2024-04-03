const mongoose = require("../config/database");

const schemaUsuario = new mongoose.Schema({
    cedula_id: {
        type: Number,
        required: [true, 'La cédula es obligatoria']
    },
    nombre: {
        type: String,
        required: [true, 'Ingresar un nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'Ingresar los apellidos es obligatorio'],
    },
    fechaNacimiento: {
        type: Date,
        required: true, 
    },
    telefono: {
        type: Number,
        max: 10,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
});

const usuario = mongoose.model("producto", schemaUsuario);
module.exports = usuario;