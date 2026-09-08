import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:false,

    },
    reducers:{
        addUser:(state,action)=>{
            state.isLoading=false,
            state.user=action.payload;

        },
        removeUser:(state)=>{
            state.isLoading=false,
            state.user=null
        }
    }
})
export let {addUser,removeUser}=authSlice.actions;

export default authSlice.reducer;