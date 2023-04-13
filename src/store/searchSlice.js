import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
  searchProducts: [],
  searchProductsStatus: STATUS.IDLE,
};

export const fetchSearchProducts = createAsyncThunk(
  "searchProducts",
  async (term, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`${BASE_URL}products/search?q=${term}`);
      const data = await res.json();

      return data.products;
    } catch (error) {
      rejectWithValue(error.message || error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProducts.pending, (state) => {
        state.searchProductsStatus = STATUS.LOADING;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.searchProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchSearchProducts.rejected, (state) => {
        state.searchProductsStatus = STATUS.FAILED;
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) =>
  state.search.searchProductsStatus;

export default searchSlice.reducer;
