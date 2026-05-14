import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart:(state,reqData)=>{
       let cartObj = reqData.payload
       state.cart=[cartObj, ...state.cart]
       localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    DeleteInCart:(state,reqData)=>{
      let id = reqData.payload;
        state.cart = state.cart.filter((item)=>item.id!==id)
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    ChangeQty:(state, reqData)=>{
      const { id, finalQty } = reqData.payload;
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, qty: finalQty } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
})


export const {addToCart, DeleteInCart, ChangeQty } = cartSlice.actions

export default cartSlice.reducer
