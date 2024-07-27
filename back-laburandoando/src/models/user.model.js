const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minLength: 3,
        maxLength: 25
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minLength: 3,
        maxLength: 25
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minLength: 8,
        maxLength: 70,
        validate: {
            validator: function(value) {
              const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
              return passwordRegex.test(value);
            },
            message: props => `${props.value} no es una contraseña válida. Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.`,
        },
    },
    mail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function(value) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value);
            },
            message: props => `${props.value} no es un correo electrónico válido.`,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User;
