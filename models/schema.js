const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    cardioName: {
        type: String,
        trim: true,
        required: "Enter workout type"
    },
    
    name: {
        type: String,
        trim: true,
        required: "Enter name for workout"
    },

    sets: {
        type: Number,
        trim: true,
        required: "Enter number of sets for workout"
    },

    distance: {
        type: Number,
        trim: true,
        required: "Total distance traveled"
    }, 

    duration: {
        type: Number,
        trim: true,
        required: "Total time spent exercising"
    },

    reps: {
        type: Number,
        trim: true,
        required: "Total reps per set"
    },

    weight: {
        type: Number,
        required: "Enter total weight"
    },
})




// const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Schema;
