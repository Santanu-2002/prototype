import {setArticle} from "../global/slices/articleSlice";
import {setCategory} from "../global/slices/categorySlice";
import {setMasterCategory} from "../global/slices/masterCategorySlice";
import {setClothType} from "../global/slices/clothTypeSlice";
import React, { useCallback } from "react";
import CustomDashboard from "../components/CustomDashboard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function GirlsDashboard(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const firstSection = [
        { name: "T-Shirts",masterCategory:"Apparel", subCategory: "Topwear", articleType: "Tshirts",  },
        { name: "Shirts", masterCategory:"Apparel", subCategory: "Topwear", articleType: "Shirts",  },
        { name: "Jeans", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Jeans",  },
        { name: "Trousers", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Trousers",  },
        { name: "Skirts", masterCategory:"Apparel", subCategory: "Bottomwear", articleType: "Skirts",  },
        { name: "Shoes", masterCategory:"Footwear", subCategory: "Shoes",  }
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
    <div className="girls-dashboard">
        <h2>Girls Fashion</h2>
    <CustomDashboard firstSec={firstSection} secondSec={secondSection} image1={"https://im.ge/i/girls-first-section-eeycDC"}
    onClick={handleClick}/>
    </div>
  );
}