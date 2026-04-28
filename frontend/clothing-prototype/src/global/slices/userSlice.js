import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    userDetail: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser:(state, action)=>{
            state.userDetail = action.payload;
        },
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;