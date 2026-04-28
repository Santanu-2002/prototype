import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    masterCategory:""
};

export const masterCategorySlice = createSlice({
    name: " masterCategory",
    initialState,
    reducers:{
        setMasterCategory:(state, action)=>{
            state.masterCategory = action.payload;
        },
    }
});

export const {setMasterCategory} = masterCategorySlice.actions;
export default masterCategorySlice.reducer;