import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems: [],
};

export const cartItemSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        setCartItem : (state, action)=>{
            state.cartItems = action.payload;
        },

        addNewItemToCart :(state, action) =>{
            state.cartItems.push(action.payload);
        },

        removeItemsFromCart :(state, action)=>{
            state.cartItems = state.cartItems.filter(
                (item)=> item.id !== action.payload
            );
        }
    }
});

export const {setCartItem, addNewItemToCart, removeItemsFromCart} = cartItemSlice.actions;
export default  cartItemSlice.reducer;