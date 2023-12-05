const mongoose = require("mongoose");

const PollsSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },

    option1: {
        type: String,
        require: true
    },

    option2: {
        type: String,
        require: true
    },

    option3: {
        type: String,
        require: true
    },

    option1_choose: {
        type: Boolean,
        default: 0
    },

    option2_choose: {
        type: Boolean,
        default: 0
    },

    option3_choose: {
        type: Boolean,
        default: 0
    }
});

const Poll = mongoose.model("Poll", PollsSchema);

module.exports = Poll;