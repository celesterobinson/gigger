const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    bandName: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },

    callTime: {
        type: String,
        required: true
    },
    dress: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: false
    },
    pay: {
        type: Number,
        required: false
    },
    travelDetails: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Gig", gigSchema);