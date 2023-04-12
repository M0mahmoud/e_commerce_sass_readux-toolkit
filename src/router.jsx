import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home, Cart, CategoryProduct, ProductSingle, Search } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductSingle /> },
      { path: "/category/:category", element: <CategoryProduct /> },
      { path: "/search/:searchTerm", element: <Search /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
