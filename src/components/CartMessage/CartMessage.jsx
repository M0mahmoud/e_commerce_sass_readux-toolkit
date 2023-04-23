import React from "react";
import "./CartMessage.scss";

const CartMessage = () => {
  return (
    <div className="cart-msg text-center">
      <div className="cart-msg-icon">
        <i className="fa-solid fa-circle-check"></i>
      </div>
      <h6 className="text-white fs-14 fw-5">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
