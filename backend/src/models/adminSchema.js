const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
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
adminSchema.methods.generateAuthToken = async function () {
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
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;



