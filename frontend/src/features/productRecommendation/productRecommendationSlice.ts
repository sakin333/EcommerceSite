import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./productRecommendationTypes";
import axios from "axios";

const initialState: InitialState = {
  loading: false,
  recommendedProducts: [],
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://asos10.p.rapidapi.com/api/v1/getYouMightAlsoLike";

const fetchRecommendedProducts: any = createAsyncThunk(
  "productRecommendation/fetchRecommendedProducts",
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
    const recommendedProducts = response.data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      brandName: product.brandName,
      imageUrl: product.imageUrl,
      price: product.price.current.value,
    }));
    return recommendedProducts;
  }
);

const productRecommendationSlice = createSlice({
  name: "productRecommendation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecommendedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendedProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchRecommendedProducts.rejected, (state, action) => {
        state.loading = false;
        state.recommendedProducts = [];
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export { fetchRecommendedProducts };
export default productRecommendationSlice.reducer;
