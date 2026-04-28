import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    articleType: ""
};

export const articleSlice = createSlice({
    name: "articleType",
    initialState,
    reducers:{
        setArticle:(state, action)=>{
            state.articleType = action.payload;
        },
    },
});

export const {setArticle} = articleSlice.actions;
export default articleSlice.reducer;