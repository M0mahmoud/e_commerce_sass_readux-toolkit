import React from "react";

import "./ProductList.scss";
import Product from "../Product/Product";

const ProductList = () => {
  return (
    <div className="product-lists  bg-whitesmoke my-3">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
