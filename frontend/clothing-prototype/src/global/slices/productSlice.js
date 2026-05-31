import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productDetail:[],
    wishListProduct:[],
};

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts:(state, action)=>{
            state.productDetail = action.payload;
        },
        setWishListProduct:(state, action)=>{
            state.wishListProduct = action.payload
        },
        addWishListProduct:(state, action)=>{
            state.wishListProduct.push(action.payload)
        },
        removeWishlistProduct:(state, action)=>{
            state.wishListProduct = state.wishListProduct.filter(
                (item)=> item.id !== action.payload
            );
        },
    }
});

export const {setProducts, addWishListProduct, setWishListProduct, removeWishlistProduct} = productSlice.actions;
export default productSlice.reducer;