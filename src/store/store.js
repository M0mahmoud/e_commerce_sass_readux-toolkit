import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    sidebar: sidebarSlice,
    search: searchSlice,
  },
});

export default store;
