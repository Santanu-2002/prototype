const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.logIn = async(req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"User Not Found"});
        }

        if(user.password !== password){
            return res.status(400).json({message:"Invalid Password"});
        }
        
        const token = jwt.sign(
            { id: user._id, email: user.email },
            "secret_key",
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message:"Login Successful",
            token,
            userInfo:{
                id: user.id,
                name:user.name,
                email:user.email,
                phone: user.phone,
            }
        });
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }   
};