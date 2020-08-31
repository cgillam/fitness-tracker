const mongoose = require("mongoose")

module.exports = mongoose.model("Workout", new mongoose.Schema({
    day: Date,
    exercises: {
        type: [{
            _id: false,
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }]
    },
}))