import React from "react";
import "./CategoryProductPage.scss";
import ProductList from "../../components/ProductList/ProductList";
const CategoryProductPage = () => {
  return (
    <div className="cat-products py-5 bg-whitesmoke">
      <div className="container">
        <div className="cat-products-content">
          <div className="title-md">
            <h3>
              See our <span className="text-capitalize">Category</span>
            </h3>
          </div>

          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
