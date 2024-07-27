const mongoose = require('mongoose')

const hoursSchema = mongoose.Schema({
    priceHour: {
        type: Number,
        required: true,
        trim: true,
        unique: false,
    },
    latest: {
        type: Boolean,
        required: true,
        trim: true,
        unique: false
    },
    createdAt: {
        type: Date,
        required: true,
        trim: true,
        unique: false,
        default: Date.now
    },
    /* Relaciones */
    worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker',
        required: true
    }
});

const Hours = mongoose.model('Hours', hoursSchema)

module.exports = Hours