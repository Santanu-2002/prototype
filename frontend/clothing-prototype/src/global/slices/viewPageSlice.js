import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNum: null,
};

export const viewPageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        setCurrentPage:(state, action)=>{
            state.pageNum = action.payload;
        }
    }
});

export const {setCurrentPage} = viewPageSlice.actions;
export default viewPageSlice.reducer;