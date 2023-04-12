import React from "react";
import { Link } from "react-router-dom";

import "./Product.scss";
import img from "../../assets/1.png";
const Product = () => {
  return (
    <Link to={"/product/2"}>
      <div className="product-item bg-white">
        <div className="category">Category</div>
        <div className="product-item-img">
          <img src={img} className="img-cover" alt="IMG" />
        </div>
        <div className="product-item-info fs-14">
          <div className="title py-2">Laptop HP</div>
          <div className="price flex align-center justify-center">
            <span className="old-price">40.23$</span>

            <span className="new-price">30.00$</span>
          </div>
          <div className="brand">
            <span>Brand: </span>
            <span className="fw-7">Tech</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
