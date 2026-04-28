const Product = require("../models/Product");

exports.getAllProducts = async(req, res) =>{
    try{
        // const allProduts = await Product.find();
        const {gender, articleType, subCategory, masterCategory, usage} = req.query;
        // color and everything will be needed 
        
        let filter = {};

        if (gender) {
            filter.gender = {
                $regex: `^${gender}$`,
                $options: "i"
            };
        }

        if (articleType) {
            filter.articleType = {
                $regex: `^${articleType}$`,
                $options: "i"
            };
        }

        if (subCategory) {
            filter.subCategory = {
                $regex: `^${subCategory}$`,
                $options: "i"
            };
        }

        if (masterCategory) {
            filter.masterCategory = {
                $regex: `^${masterCategory}$`,
                $options: "i"
            };
        }

        if(usage){
            filter.usage ={
                $regex: `^${usage}$`,
                $options: "i"
            };
        }
        console.log(filter);

        const products = await Product.find(filter);
        console.log(products);
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
}