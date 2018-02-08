const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    bandName: {
        type: String,
        required: false
    },
    eventName: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },

    callTime: {
        type: String,
        required: false
    },
    dress: {
        type: String,
        required: false
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