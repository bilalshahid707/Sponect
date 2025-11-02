import { createSlice } from "@reduxjs/toolkit";

const initialState={
    LoggedIn:false,
    Data:null,
}

export const UserAuth = createSlice({
    name:"User",
    initialState,
    reducers:{
        logUser:(state,action)=>{
            state.LoggedIn = action.payload;
        },
        setUser:(state,action)=>{
            state.Data=action.payload
        }
    }
})

export const { logUser,setUser } = UserAuth.actions;
export default UserAuth.reducer