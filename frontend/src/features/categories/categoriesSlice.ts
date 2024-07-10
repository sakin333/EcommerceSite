import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./categoriesTypes";
import axios from "axios";

const initialState: InitialState = {
  loading: false,
  categories: [],
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://asos10.p.rapidapi.com/api/v1/getCategories";

const fetchCategories: any = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(BASE_URL, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "asos10.p.rapidapi.com",
      },
    });

    const categories = response.data.data.brands.map((item: any) => ({
      id: item.id,
      content: {
        title: item.title,
      },
      children: item.children.map((brand: any) => ({
        categoryId: brand.link.categoryId,
        title: brand.content.title,
      })),
    }));

    console.log("categories", categories);

    return categories;
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export { fetchCategories };
export default categoriesSlice.reducer;
