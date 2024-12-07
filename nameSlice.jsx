import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"name",
    initialState:{
        nm:"hello friends we are from bhopal"
    },
    reducers:{
        changeName:(state)=>{
            state.nm="we are cybrom students";
        }
    
    }
})
export const {changeName}=nameSlice.actions;
export default nameSlice.reducer;