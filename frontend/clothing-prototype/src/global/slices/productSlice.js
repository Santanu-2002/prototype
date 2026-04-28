import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productDetail:[]
};

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts:(state, action)=>{
            state.productDetail = action.payload;
        },
    }
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;