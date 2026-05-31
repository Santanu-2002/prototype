import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    category : "",
    usage :"",
    gender:"",
    masterCategory:"",
    articleType: ""
};

export const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategory:(state, action) =>{
            state.category = action.payload;
        },
        setClothType:(state, action)=>{
            state.usage = action.payload;
        },
        setGender:(state, action)=>{
            state.gender = action.payload;
        },
        setMasterCategory:(state, action)=>{
            state.masterCategory = action.payload;
        },
        setArticle:(state, action)=>{
            state.articleType = action.payload;
        }
    }
});

export const {setCategory, setArticle, setClothType, setGender, setMasterCategory} = categorySlice.actions;
export default categorySlice.reducer;