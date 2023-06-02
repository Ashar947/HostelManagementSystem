const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
    From: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    Staus: {
        type: String,
        required:"Pending"
    },
    Date:{
        type:Date,
        default: new Date()
    }
})
const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;



