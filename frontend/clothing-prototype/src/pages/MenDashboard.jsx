import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CustomDashboard from "../components/CustomDashboard";
import { useDispatch } from "react-redux";
import {setArticle} from "../global/slices/articleSlice";
import {setCategory} from "../global/slices/categorySlice";
import {setMasterCategory} from "../global/slices/masterCategorySlice";
import {setClothType} from "../global/slices/clothTypeSlice";

export default function MenDashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstSection = [
    { name: "T-Shirts",masterCategory:"Apparel", subCategory: "Topwear", articleType: "Tshirts", 
      image:"http://assets.myntassets.com/v1/images/style/properties/Puma-Men-Grey-T-shirt_32668f8a61454d0cc028a808cf21b383_images.jpg"},
    { name: "Shirts", masterCategory:"Apparel", subCategory: "Topwear", articleType: "Shirts", 
      image:"http://assets.myntassets.com/v1/images/style/properties/06e9d4231254fdb2c7fe967ad413ad7b_images.jpg"
     },
    { name: "Jeans", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Jeans",
      image:"http://assets.myntassets.com/v1/images/style/properties/6cb6a14583b044dca0a0bd9efc2fc4c7_images.jpg"
      },
    { name: "Trousers", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Trousers",
      image:"http://assets.myntassets.com/v1/images/style/properties/987d4390421e951dafe4bfdaba57f5fd_images.jpg"
      },
    { name: "Shorts", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Shorts",
      image:"http://assets.myntassets.com/v1/images/style/properties/Do-u-speak-green-Men-Blue-Shorts_40b6775eae62124195817a64d4ae4a93_images.jpg"
      },
    { name: "Shoes", masterCategory:"Footwear", subCategory: "Shoes",
      image:"http://assets.myntassets.com/v1/images/style/properties/051d64772f1b38ff476fbf0a807f365a_images.jpg"
      }
  ];

  const secondSection = [
    { name: "Casual Wear", masterCategory:"Apparel", usage:"Casual"  },
    { name: "Office Wear", masterCategory:"Apparel", usage:"Formal"},
    { name: "Sports Wear", masterCategory:"Apparel", usage:"Sports"},
    {name:"Ethnic Wear", masterCategory:"Apparel", usage:"Ethnic"}    
  ];

  const handleClick = useCallback((masterCategory, subCategory, articleType, usage) => {

      if (masterCategory) {
        dispatch(setMasterCategory(masterCategory));
      }

      if (subCategory) {
        dispatch(setCategory(subCategory));
      }

      if (articleType) {
        dispatch(setArticle(articleType));
      }

      if (usage) {
        dispatch(setClothType(usage));
      }

      navigate("/allProductsPage");

  }, [dispatch]);
  return (
    <div className="men-dashboard">
      <h2>Men's Fashion</h2>
      <CustomDashboard firstSec={firstSection} secondSec={secondSection} 
      image1={"https://im.ge/i/mens-first-section-eeyx0Y"} onClick={handleClick} />      
    </div>
  );
}