import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import "./allProducts.css";
import useProducts  from ".././hooks/useProducts";

import {useSelector, useDispatch} from "react-redux"
import {setProducts} from  "../global/slices/productSlice";

export default function AllProductsPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const gender = useSelector((state)=> state.gender.gender);
    const masterCategory = useSelector((state)=> state.master.masterCategory);
    const subCategory = useSelector((state)=> state.category.category);
    const usage = useSelector((state)=>state.clothType.usage);
    const articleType = useSelector((state)=> state.article.articleType);
    const {isLoading, err, allProducts} = useProducts(subCategory, masterCategory, usage, articleType, gender);

    console.log(subCategory);
    console.log(masterCategory);
    console.log(usage);
    console.log(articleType);

    const [page, setPage] = useState(() => {
    return Number(sessionStorage.getItem("page")) || 1;
    });

    useEffect(() => {
    sessionStorage.setItem("page", page);
    }, [page]);

    const  itemPerPage = 20;

    const startIndex = (page-1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    
    const currentData = allProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(allProducts.length / itemPerPage);
return(
    <div className="product_page">
        <div className="products_viewingPage">
        {currentData.map((items)=>(
            <div key={items.id} className="product_card" onClick={()=>{dispatch(setProducts([items])); navigate("/productDetail") }}>
            <img src={items.image} className="product_image"/>
            <p className="product_detail">{items.productDisplayName}</p>
            <button className="wishslist-button">❤️</button>
        </div>))}
        </div>

        <div>
            <button 
            onClick={()=>setPage((prev)=>prev -1)} 
            disabled= {page===1}
            className="action_buttons"
            >
                BACK
            </button>
            <span>{page} of {totalPages}</span>
            <button onClick={()=>setPage((prev)=>prev +1)} className="action_buttons">NEXT</button>
        </div>
    </div>
)
}

    // const filteredData = category ? 
    // allProducts.filter((item)=>
    //     item.subCategory?.toLowerCase()===category.toLowerCase()
    //     || item.masterCategory?.toLowerCase()=== category.toLowerCase())
    // : allProducts;
    // this is needed if something happens
    