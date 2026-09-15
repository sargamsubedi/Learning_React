import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Guest",
        isLoggedIn:false,
        loading:false,
        error:null
    },
    reducers:{
        logIn:(state,action)=>{
            state.name=action.payload
            state.isLoggedIn=true
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.fulfilled,(state,action)=> {
            console.log(action.payload);
            
            state.name= action.payload.name
            state.loading=false
        })

        builder.addCase(fetchUser.pending,(state)=>{
            state.loading=true
            state.error=null
        })

        builder.addCase(fetchUser.rejected,(state,action)=>{

                // for error thrown using throw
                // state.error=action.error.message

                // for using thunkAPI's rejectWithValue
                state.error= action.payload
                
                state.loading= false
        })

    }
})

export const fetchUser = createAsyncThunk(
    "user/fetchUser" , //this means in user slice fetchUser function , just a naming convention could be anyting like abc.

    async (userId,thunkAPI)=>{
        const res =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(!res.ok)
        {   
            // by this method the error message goes to the action.error.message
            // throw new Error("sorry couldn't fetch the user data")

            return thunkAPI.rejectWithValue("sorry user not found!")
        }
        return await res.json();
    }
)

export default userSlice.reducer
export const {logIn} = userSlice.actions