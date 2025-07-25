const mongoose = require("mongoose");



const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 200
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        default: null
    }
});


const Chat = mongoose.model("Chat", chatSchema);


module.exports = Chat;