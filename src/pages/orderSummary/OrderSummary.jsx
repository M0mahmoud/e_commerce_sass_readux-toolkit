import React, { useState } from "react";
import "./orderSummary.scss";
import { useSelector } from "react-redux";

import { getAllCarts } from "../../store/cartSlice";
import OrderForm from "../../components/OrderForm/OrderForm";
import { formatPrice } from "../../utils/helpers";
import PDFButton from "../../components/PDF/PDFSummary";

const OrderSummary = () => {
  const carts = useSelector(getAllCarts);
  const { totalAmount } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({});

  function handleFormSubmit(data) {
    setFormData(data);
  }

  let check = Object.keys(formData).length === 0;

  function orderSummaryHandler() {
    console.log("formData:", formData);
  }

  return (
    <section className="order-sum">
      <div className="container">
        <div className="">
          <div className="order-summary">
            <div className="order-summary__form">
              <h2 className="order-summary__form-title">
                Enter Your Delivery Information
              </h2>
              <OrderForm onSubmit={handleFormSubmit} />
            </div>
            <div className="order-summary__summary">
              <h2 className="order-summary__summary-title">Order Summary</h2>
              {carts?.map((el) => (
                <div className="order-summary__item" key={el.id}>
                  <span className="order-summary__item-name">{el.title}</span>
                  <br />
                  <span className="order-summary__item-price">
                    {formatPrice(el.discountedPrice)}
                  </span>
                  <br />
                  <span className="order-summary__item-price">
                    {el.quantity}X Items
                  </span>
                  <br />
                  <span className="order-summary__item-price">
                    Total {formatPrice(el.totalPrice)}
                  </span>
                </div>
              ))}

              <div className="order-summary__total">
                <span className="order-summary__total-label">Total Price:</span>
                <span className="order-summary__total-price">
                  {" "}
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <button
                className="order-summary__submit-button"
                type="submit"
                onClick={orderSummaryHandler}
                disabled={check}
              >
                Place Order
              </button>
              <div>
                <PDFButton
                  check={check}
                  userData={formData}
                  cart={carts}
                  totalPrice={totalAmount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
