import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product } from "./productTypes";
import axios from "axios";

const initialState: InitialState = {
  loading: false,
  products: [],
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://asos10.p.rapidapi.com/api/v1/getProductList";

const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async (categoryId: string) => {
    const response = await axios.get(BASE_URL, {
      params: {
        categoryId: categoryId,
        currency: "USD",
        sizeSchema: "US",
        limit: "50",
        sort: "recommended",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "asos10.p.rapidapi.com",
      },
    });

    const products = response.data.data.products.map((product: any) => ({
      id: product.id,
      name: product.name,
      brandName: product.brandName,
      colour: product.colour,
      imageUrl: product.imageUrl,
      price: {
        value: product.price.current.value,
        text: product.price.current.text,
      },
      url: product.url,
    }));

    return products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export { fetchProducts };
export default productSlice.reducer;
