import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDEL,
  productSingle: [],
  productSingleStatus: STATUS.IDEL,
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetch",
  async (limit, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`${BASE_URL}products?limit=${limit}`);
      const data = await res.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const fetchProductSingleAsync = createAsyncThunk(
  "productSingle/fetch",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(`${BASE_URL}products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })

      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchProductsAsync.rejected, (state) => {
        state.productsStatus = STATUS.FAILED;
      })

      .addCase(fetchProductSingleAsync.pending, (state) => {
        state.productSingleStatus = STATUS.LOADING;
      })

      .addCase(fetchProductSingleAsync.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchProductSingleAsync.rejected, (state) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) =>
  state.product.productSingleStatus;
export default productSlice.reducer;
