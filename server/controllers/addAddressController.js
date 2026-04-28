const Address = require ("../models/Addresses");

exports.addressDetails = async(req, res)=>{
    try{
        const {name, contact, address} = req.body;

        const newAddress = new Address({name, contact, address});

        await newAddress.save();

        res.status(200).json({
            message:"Address Saved"
        });
    }catch(error){
        res.status(500).json({
            message:"Server Error"
        });
    }
};
