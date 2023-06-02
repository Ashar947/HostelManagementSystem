const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique:true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required:true
    },
    contactNumber:{
        type: Number,
        required: true,
        // unique:true
    },
    jobType:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    dateJoined :{
        type:Date,
        default: new Date()
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
// // hasing passowrd
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
// })
employeeSchema.methods.generateAuthToken = async function () {
    try {
        console.log(`Token == generating `)
        let genToken = jwt.sign({ _id: this._id },"hostelmanagementsystem");
        console.log(`Token == ${genToken}`)
        this.tokens = this.tokens.concat({token:genToken}); 
        await this.save();
        return genToken;
        
    } catch (error) {
        console.log(`error is ${error}`);
    }
}
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;



