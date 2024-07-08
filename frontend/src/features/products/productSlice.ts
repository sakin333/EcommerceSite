import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product } from "./productTypes";

const initialState: InitialState = {
  loading: false,
  products: [],
  error: null,
};

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch(BASE_URL, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "asos-com1.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.products;
});

export const productSlice = createSlice({
  name: "products",
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
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<string | null>) => {
          state.loading = false;
          state.products = [];
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});

export { fetchProducts };
export default productSlice.reducer;
