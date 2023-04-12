import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE,
};

export const fetchCategory = createAsyncThunk(
  "category/fetch",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`${BASE_URL}products/categories`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const fetchCategorySingleProducts = createAsyncThunk(
  "categorySingle/fetch",
  async (category, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(`${BASE_URL}products/category/${category}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchCategory.rejected, (state) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchCategorySingleProducts.pending, (state) => {
        state.categoryProductsStatus = STATUS.LOADING;
      })

      .addCase(fetchCategorySingleProducts.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchCategorySingleProducts.rejected, (state) => {
        state.categoryProductsStatus = STATUS.FAILED;
      });
  },
});

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) =>
  state.category.categoryProducts;
export const getCategoryProductsStatus = (state) =>
  state.category.categoryProductsStatus;
export default categorySlice.reducer;
