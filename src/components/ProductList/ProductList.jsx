import React from "react";

import "./ProductList.scss";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="product-lists  bg-whitesmoke my-3">
        {products &&
          products.map((product) => {
            let newPrice =
              product.price -
              product.price * (product.discountPercentage / 100);
            return (
              <Product key={product.id} product={{ ...product, newPrice }} />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
