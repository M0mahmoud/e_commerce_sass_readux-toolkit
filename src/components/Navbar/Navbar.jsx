import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../../components/CartModal/CartModal";
import {
  getAllCartItemsCount,
  getAllCarts,
  getCartTotal,
} from "../../store/cartSlice";
import { setSidebarOn } from "../../store/sidebarSlice";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getAllCartItemsCount);

  const searchTermHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <nav className="navbar">
      <div className="navbar-con flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            className="slider-show-btn text-white"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to={"/"} className="navbar-brand flex align-center">
            <span className="navbar-brand-icon">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navnar-brand-txt mx-2">
              <span className="fw-7">Shop</span>up
            </span>
          </Link>
        </div>

        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14 "
                placeholder="Search Your Preferred Items..."
                onChange={(e) => searchTermHandler(e)}
              />
              <button type="submit">
                <Link
                  to={`search/${searchTerm}`}
                  className="text-white search-btn flex align-center justify-center"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">{itemsCount}</div>
            <CartModal carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
