const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hostel",{
}).then (()=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(`${err}`);
});