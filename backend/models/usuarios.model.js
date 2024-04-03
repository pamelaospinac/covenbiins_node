const mongoose = require("../config/database");

const schemaUsuario = new mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Ingresar la cédula es obligatorio']
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
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Email incorrecto'
        },
    },
    contrasena: {
        type: String,
        required: true,
    },
});

const usuario = mongoose.model("producto", schemaUsuario);
module.exports = usuario;