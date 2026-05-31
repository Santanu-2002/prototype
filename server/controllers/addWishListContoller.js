const Wishlist = require("../models/Wishlist");

exports.addWishlsit = (req, res)=>{
    try{

        const {
            userId, id,
             gender, masterCategory, 
             subCategory, articleType, 
             baseColor, season, 
             year, usage, 
             productDisplayName, fileName, image} = req.body;

        const newList = Wishlist({id,
             gender, masterCategory, 
             subCategory, articleType, 
             baseColor, season, 
             year, usage, 
             productDisplayName, fileName, image});

        await newList.save();

        res.status(200).json({message: "Saved to wishlist"});
    }catch(error){
        res.status(500).json({message: "Internal Server Error"});
    }
};