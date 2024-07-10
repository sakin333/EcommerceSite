import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { InitialState } from "./productDetailsTypes";

const initialState: InitialState = {
  loading: false,
  product: null,
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://asos10.p.rapidapi.com/api/v1/getProductDetails";

const fetchProductDetail: any = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (productId: string) => {
    const response = await axios.get(BASE_URL, {
      params: {
        productId: productId,
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "asos10.p.rapidapi.com",
      },
    });

    console.log("response", response.data);

    const productDetail = response.data.data;

    console.log(productDetail);

    return productDetail;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.product = null;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export { fetchProductDetail };
export default productDetailSlice.reducer;
