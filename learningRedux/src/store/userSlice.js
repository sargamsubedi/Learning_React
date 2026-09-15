import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Guest",
        isLoggedIn:false
    },
    reducers:{
        logIn:(state,action)=>{
            state.name=action.payload
            state.isLoggedIn=true
        }
    }
})
export default userSlice.reducer
export const {logIn} = userSlice.actions