const Address = require("../models/Addresses");

exports.removeAddress = async(req, res)=>{
    try{
        const {adsId} = req.body;
    
        await Address.findByIdAndDelete(adsId);
        res.status(200).json({
            message:"Address Deleted"
        });
    }catch(error){
        res.status(500).json({
            message:"Server Malfunction"
        });
    }
};
