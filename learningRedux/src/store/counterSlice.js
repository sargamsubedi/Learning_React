import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
        name:"Guest"
    },
    reducers:{
        increase: (state)=>{
            state.count+=1
        },
        decrease: (state)=>{
            state.count-=1
        },
        reset: (state)=>{
            state.count=0
        },
        increaseBy: (state, action)=>{
            state.count+= action.payload
        },
        changeName:(state,action)=>{
            state.name=action.payload
        }
    }
})

export default counterSlice.reducer
export const {increase,decrease,reset,increaseBy,changeName}=  counterSlice.actions