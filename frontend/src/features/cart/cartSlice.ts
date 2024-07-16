import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./cartTypes";

const initialState: InitialState = {
  cartItems: [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action) => {
      const productId = action.payload;
      if (state.cartItems.find((item) => item.id === productId) == null) {
        state.cartItems = [...state.cartItems, { id: productId, quantity: 1 }];
      } else {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        state.cartItems = updatedCartItems;
      }
    },
    decreaseCartQuantity: (state, action) => {
      const productId = action.payload;
      if (
        state.cartItems.find((item) => item.id === productId)?.quantity === 1
      ) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
      } else {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        state.cartItems = updatedCartItems;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    getCartQuantity: (state) => {
      state.cartQuantity = state.cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
    },
  },
});

export const {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  getCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
