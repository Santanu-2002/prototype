import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    gender:""
}
export const genderSlice = createSlice({
    name: "genderSelection",
    initialState,
    reducers:{
        setGender:(state, action)=>{
            state.gender = action.payload
        }
    }
});

export const {setGender} = genderSlice.actions;
export  default genderSlice.reducer;