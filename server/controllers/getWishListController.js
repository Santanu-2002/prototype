const Wishlist = require("../models/Wishlist");

exports.getWishlistDetails = (req, res)=>{
    try{
        const {id} = req.body;
        
        const userWishlist = await Wishlist.find({userId : id});

        if(userWishlist.length === 0){
            return res.status(400).json({message: "Nothing in Wishlist"});
        }

        res.status(200).json({
            message:"fetched Wishlist data",
            userWishlist
        });
    }catch(error){
        res.status(500).json({message: "SERVER_ERROR"});
    }
}