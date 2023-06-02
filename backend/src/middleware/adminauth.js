const jwt = require("jsonwebtoken");
const Admin = require('../models/adminSchema');


const authenticate = async (req , res , next) =>{
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,"hostelmanagementsystem");
        const rootUser = await Admin.findOne({_id:verifyToken._id , "tokens.token":token});
        if (!rootUser){
            throw new Error('User not found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
                                                               
    }catch(error){
        res.status(401).send('Admin Not Found')
        console.log(error)
    }

}

module.exports = authenticate;