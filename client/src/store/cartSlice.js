import {createSlice} from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const initialState = {
    cartItems: typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item  = action.payload;
            const itemID = parseInt(action.payload.id);
            const newItem = { ...item, amount: 1 };
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id = action.payload.id
            )
            if(itemIndex >=0 ){
                state.cartItems[itemIndex].amount +=1
            }else{
                const tempProduct = {...action.payload, amount: 1}
                state.cartItems.push(tempProduct)
            }
            // const cartItem = state.cartItems.find(item => item.id === itemID);
            // if (cartItem) {
            //     const newCart = state.cartItems.map(item => {
            //         if (item.id === itemID) {
            //             return { ...item,amount: cartItem.amount + 1 };
            //         }
            //         return item;
            //     });
            //     return { ...state, cartItems: newCart };
            // } else {
            //     return { ...state, cartItems: [...state.cartItems, newItem] };
            // }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
            return { 
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        },
        changeInput (state, action) {
            const newCart = state.items.map(item =>{
                if( item.id === action.payload.id ){
                    return {...item}
                }
                else{
                    return {...item}
                }
            })
        //     const cartItem = cart.find((item)=> {
        //       return item.id === id
        //     })
        //     if(cartItem) {
        //       const newCart = cart.map(item =>{
        //         if( item.id === id ){
        //             if(isNaN(value)){
        //               setAmount(1)
        //               return {...item, amount: 1}
        //             }else{
        //               setAmount(value)
        //               return {...item, amount: value}
        //             }
        //         }else{
        //           return item
        //         }
        //       })
        //       setCart(newCart)
        //     }
          }
    },
    
})

export const {
    addToCart,
    removeFromCart,
    changeInput
} = cartSlice.actions

export default cartSlice.reducer;