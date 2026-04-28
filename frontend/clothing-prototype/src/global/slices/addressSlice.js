import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    addresses : [] 
};

export const addressSlice = createSlice({
    name: "addressDetails",
    initialState,
    reducers:{
        setAddress:(state, action)=>{
            state.addresses = action.payload;
        },

        addAddress:(state, action)=>{
            state.addresses.push(action.payload);
        },
        removeAddress: (state, action) => {
        state.addresses = state.addresses.filter(
            item => item.id !== action.payload
        );
}
    },
});

export const {setAddress, addAddress, removeAddress} = addressSlice.actions;

export default addressSlice.reducer;