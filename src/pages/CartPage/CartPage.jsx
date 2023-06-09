import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shopping_cart from "../../assets/shopping_cart.png";
import {
  clearCart,
  getAllCarts,
  removeFromCart,
  toggleCartQty,
} from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";
import "./CartPage.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column font-manrope">
          <img src={shopping_cart} alt="NO PRODUCTS FOUND" />
          <span className="fw-6 fs-15 text-gray ">
            Your shopping cart is empty.
          </span>
          <Link to="/" className="p-3 shopping-btn bg-orange text-white fw-5">
            Go shopping Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="cart bg-whitesmoke">
      <div className="container">
        <div className="cart-ctable">
          <div className="cart-chead bg-white">
            <div className="cart-ctr fw-6 font-manrope fs-15">
              <div className="cart-cth">
                <span className="cart-ctxt">S.N.</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Product</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Unit Price</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Quantity</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Total Price</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Actions</span>
              </div>
            </div>
          </div>
          <div className="cart-cbody bg-white">
            {carts.map((item, index) => (
              <div className="cart-ctr py-4" key={item?.id}>
                <div className="cart-ctd">
                  <span className="cart-ctxt">{index + 1}</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt">{item?.title}</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt">
                    {formatPrice(item?.discountedPrice)}
                  </span>
                </div>
                <div className="cart-ctd">
                  <div className="qty-change flex align-center">
                    <button
                      type="button"
                      className="qty-decrease flex align-center justify-center"
                      onClick={() =>
                        dispatch(toggleCartQty({ id: item?.id, type: "DEC" }))
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <div className="qty-value flex align-center justify-center">
                      {item?.quantity}
                    </div>

                    <button
                      type="button"
                      className="qty-increase flex align-center justify-center"
                      onClick={() =>
                        dispatch(toggleCartQty({ id: item?.id, type: "INC" }))
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-ctd">
                  <span className="cart-ctxt text-orange fw-5">
                    {formatPrice(item?.totalPrice)}
                  </span>
                </div>

                <div className="cart-ctd">
                  <button
                    type="button"
                    className="delete-btn text-dark"
                    onClick={() => dispatch(removeFromCart(item?.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
            <div className="cart-cfoot-l">
              <button
                type="button"
                className="clear-cart-btn text-danger fs-15 text-uppercase fw-4"
                onClick={() => dispatch(clearCart())}
              >
                <i className="fas fa-trash"></i>
                <span className="mx-1">Clear Cart</span>
              </button>
            </div>

            <div className="cart-cfoot-r flex flex-column justify-end">
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">
                  Total ({itemsCount}) items:{" "}
                </div>
                <span className="text-orange fs-22 mx-2 fw-6">
                  {formatPrice(totalAmount)}
                </span>
              </div>

              <button
                type="button"
                className="checkout-btn text-white bg-orange fs-16"
              >
                <Link to={"/checkout"}>Check Out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
