const Addresses = require("../models/Addresses");

exports.getAddress = async(req, res) =>{
    try{
        const {userId} = req.body;

        const userAddress = Addresses.find({userId: userId});

        if(userAddress.length ===0){
            res.status(400).json({message:"Invalid request id"});
        };

        res.status(200).json({
            message: "Request success",
            reqAddresses:{userAddress},
        });

    }catch(error){
        res.status(500).json({
            message: "Server Error"
        });
    }
}; 