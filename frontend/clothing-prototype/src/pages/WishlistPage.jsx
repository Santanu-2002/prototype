import { useState, useEffect } from "react";
import {addWishListProduct, removeWishlistProduct, setProducts} from "../global/slices/productSlice";
import { useSelector,useDispatch } from "react-redux";


export default function WishlistPage(){
    const dispatch = useDispatch();
    const wishlistedProducts = useSelector((state) => state.product.wishListProduct);
    
return(
        <div className="product_page">
                <div className="products_viewingPage">
                {wishlistedProducts.map((items)=>(
                    <div key={items.id} className="product_card" 
                    onClick={()=>{dispatch(setProducts([items])); navigate("/productDetail"); dispatch(addWishListProduct([items])); }}>
                    <img src={items.image} className="product_image"/>
                    <p className="product_detail">{items.productDisplayName}</p>
                    <button className="remove-wishslist-button" onClick={()=>{dispatch(removeWishlistProduct(items))}}>
                        x
                    </button>
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