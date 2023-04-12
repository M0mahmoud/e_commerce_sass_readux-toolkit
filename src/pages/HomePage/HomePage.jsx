import React from "react";
import "./HomePage.scss";

import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <main>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>Laptop Products</h3>
              </div>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
