const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "cardio or resistance"
            },

            name: {
                type: String,
                trim: true,
                required: "Enter name for workout"
            },

            sets: {
                type: Number,
                trim: true,
            },

            distance: {
                type: Number,
                trim: true,
            },

            duration: {
                type: Number,
                trim: true,
                required: "Total time spent exercising"
            },

            reps: {
                type: Number,
                trim: true,
            },

            weight: {
                type: Number,
                trim: true,
            },

        }
    ]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
