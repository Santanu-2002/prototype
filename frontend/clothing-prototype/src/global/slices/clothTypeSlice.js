import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usage :""
};

export const clothTypeSlice = createSlice({
    name: "clothType",
    initialState,
    reducers:{
        setClothType:(state, action)=>{
            state.usage = action.payload;
        },
    }
});

export const {setClothType} = clothTypeSlice.actions;

export default clothTypeSlice.reducer;