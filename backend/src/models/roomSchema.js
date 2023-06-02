const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');


const roomSchema = new mongoose.Schema({
    roomNo: {
        type:Number,
        required:true
    },
    roomLimit: {
        type: Number,
        required: true
    },
    member_1: {
        type: String,
        default:"none"     
    },
    member_2: {
        type: String,
        default:"none"
    },
    member_3: {
        type: String,
        default:"none"
    },
    member_4: {
        type: String,
        default:"none"
    },
    status: {
        type: String,
        default:"Empty"
    },
    
})
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;



