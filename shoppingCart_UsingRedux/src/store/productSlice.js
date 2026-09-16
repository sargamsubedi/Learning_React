import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{
        product:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
            state.error=null
        })

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.product=action.payload,
            state.loading=false
        })

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})

export const fetchProducts = createAsyncThunk(
    "product/fetchProduct",
    async (_ , thunkAPI)=>{
        const res = await fetch("")
        if(!res.ok)
        {
            thunkAPI.rejectWithValue("sorry cannot fetch products")
        }
        return await res.json();
    }
)

export default productSlice.reducer