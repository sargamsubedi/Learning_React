import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],

    },
    reducers: {
        addItem: (state, action) => {

            //if item is already in cart increase quantity
            if (state.cartItems.find(cartitem => cartitem.id === action.payload.id)) {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += 1
                    }
                    return item
                })
            }
            //if first time adding item 
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.cartItems = []
        },
        increaseQuantity: (state, action) => {//action accepts items id not whole item

            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1
                }
                return item
            })

        },
        decreaseQuantity: (state, action)=> {
            //if quantity is 1 remove item on decrease quantity
            if (state.cartItems.find(item => item.id === action.payload).quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)

            }
            else {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity -= 1
                    }
                    return item
                })
            }
        }
    }
})

export default cartSlice.reducer
export const { addItem, removeItem, clearCart,increaseQuantity,decreaseQuantity } = cartSlice.actions