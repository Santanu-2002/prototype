import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
export default function SearchResults(){

    const [searchInput, setSearchInput]= useState("")
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    
    const searchPreference = [
        { name: "shirts for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirt" },
        { name: "tshirts for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tshirts" },
        { name: "jeans for men", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Jeans" },
        { name: "trousers for men", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Trousers" },
        { name: "shorts for men", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Shorts" },
        { name: "jackets for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Jackets" },
        { name: "hoodies for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Sweatshirts" },
        { name: "sweaters for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Sweaters" },
        { name: "blazers for men", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Blazers" },
        { name: "track pants for men", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Track Pants" },

        { name: "casual shoes for men", gender: "Men", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Casual Shoes" },
        { name: "sports shoes for men", gender: "Men", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Sports Shoes" },
        { name: "formal shoes for men", gender: "Men", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Formal Shoes" },
        { name: "sandals for men", gender: "Men", masterCategory: "Footwear", subCategory: "Sandals", articleType: "Sandals" },
        { name: "flip flops for men", gender: "Men", masterCategory: "Footwear", subCategory: "Flip Flops", articleType: "Flip Flops" },

        { name: "shirts for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirt" },
        { name: "tshirts for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tshirts" },
        { name: "kurtas for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Kurtas" },
        { name: "tops for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tops" },
        { name: "blouses for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Blouses" },

        { name: "jeans for women", gender: "Women", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Jeans" },
        { name: "leggings for women", gender: "Women", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Leggings" },
        { name: "skirts for women", gender: "Women", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Skirts" },
        { name: "palazzos for women", gender: "Women", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Palazzos" },
        { name: "shorts for women", gender: "Women", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Shorts" },

        { name: "dresses for women", gender: "Women", masterCategory: "Apparel", subCategory: "Dress", articleType: "Dresses" },
        { name: "sarees for women", gender: "Women", masterCategory: "Apparel", subCategory: "Dress", articleType: "Sarees" },
        { name: "ethnic wear for women", gender: "Women", masterCategory: "Apparel", subCategory: "Dress", articleType: "Ethnic Dress" },
        { name: "jackets for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Jackets" },
        { name: "sweaters for women", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Sweaters" },

        { name: "heels for women", gender: "Women", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Heels" },
        { name: "flats for women", gender: "Women", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Flats" },
        { name: "sports shoes for women", gender: "Women", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Sports Shoes" },
        { name: "casual shoes for women", gender: "Women", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Casual Shoes" },
        { name: "sandals for women", gender: "Women", masterCategory: "Footwear", subCategory: "Sandals", articleType: "Sandals" },

        { name: "tshirts for boys", gender: "Boys", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tshirts" },
        { name: "shirts for boys", gender: "Boys", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirt" },
        { name: "jeans for boys", gender: "Boys", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Jeans" },
        { name: "shorts for boys", gender: "Boys", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Shorts" },
        { name: "shoes for boys", gender: "Boys", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Casual Shoes" },

        { name: "tops for girls", gender: "Girls", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tops" },
        { name: "dresses for girls", gender: "Girls", masterCategory: "Apparel", subCategory: "Dress", articleType: "Dresses" },
        { name: "jeans for girls", gender: "Girls", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Jeans" },
        { name: "leggings for girls", gender: "Girls", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Leggings" },
        { name: "sandals for girls", gender: "Girls", masterCategory: "Footwear", subCategory: "Sandals", articleType: "Sandals" },

        { name: "watches for men", gender: "Men", masterCategory: "Accessories", subCategory: "Watches", articleType: "Watches" },
        { name: "watches for women", gender: "Women", masterCategory: "Accessories", subCategory: "Watches", articleType: "Watches" },
        { name: "bags for women", gender: "Women", masterCategory: "Accessories", subCategory: "Bags", articleType: "Handbags" },
        { name: "wallets for men", gender: "Men", masterCategory: "Accessories", subCategory: "Wallets", articleType: "Wallets" },
        { name: "belts for men", gender: "Men", masterCategory: "Accessories", subCategory: "Belts", articleType: "Belts" },
        { name: "caps for men", gender: "Men", masterCategory: "Accessories", subCategory: "Headwear", articleType: "Caps" },
        { name: "sunglasses for women", gender: "Women", masterCategory: "Accessories", subCategory: "Eyewear", articleType: "Sunglasses" }
    ];

    useEffect(()=>{
        const timer = setTimeout(()=>{
            
        })
    })
    return(
        <div>
            <input type="text" />
        </div>
    )
}