import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import productDetailReducer from "../features/productDetails/productDetailsSlice";
import categoryReducer from "../features/categories/categoriesSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
