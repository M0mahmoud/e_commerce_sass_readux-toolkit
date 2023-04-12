import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    sidebar: sidebarSlice,
  },
});

export default store;
