const { Schema } = require('mongoose')
const User = require('./user.model')


const workerSchema = User.discriminator('Worker', new Schema({
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function(value) {
                const phoneRegex = /^[0-9]{10}$/;
                return phoneRegex.test(value);
            },
            message: props => `${props.value} no es un número de teléfono válido. Debe tener 10 dígitos.`,
        },
    },
    address: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minLength: 3,
        maxLength: 70
    },
    birthdate: {
        type: Date,
        required: true,
        trim: true,
        unique: false,
    },
    role: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        default: 'worker',
        enum: ['worker']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));

const Worker = User.discriminator('Worker', workerSchema);

module.exports = Worker;