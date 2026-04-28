const User = require("../models/User");
const jwt = require("jsonwebtoken");
const signUp = async(req, res) =>{
    try{
        const {name, email, phone, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already Exists"});
        }

        const newUser = new User({
            name, email, phone, password
        });

        await newUser.save();

        const token = jwt.sign(
                { id: newUser._id, email: newUser.email },  
                "secret_key",
                { expiresIn: "1h" }
        );

        res.status(201).json({
            message:"User Saved Succesfully",
            token,
            user:{
                id:newUser.id,
                name:newUser.name,
                email:newUser.email,
                phone:newUser.phone
            }
        });

    }catch(error){
        res.status(500).json({message:"Server Error", error});
    }
}

module.exports = {signUp};