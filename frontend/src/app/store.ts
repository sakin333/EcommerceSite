import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import productDetailReducer from "../features/productDetails/productDetailsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
