import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { getAllCategories } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

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
              />
              <Link
                to={"/"}
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>

          {/* Move it as new section in home  */}
          {/* <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            <li className="nav-item no-wrap">
              <Link to={`/`} className="nav-link text-capitalize">
                One{" "}
              </Link>
            </li>
            <li className="nav-item no-wrap">
              <Link to={`/`} className="nav-link text-capitalize">
                Two{" "}
              </Link>
            </li>
            <li className="nav-item no-wrap">
              <Link to={`/`} className="nav-link text-capitalize">
                Three
              </Link>
            </li>
          </ul> */}
        </div>

        <div className="navbar-cart flex align-center">
          <Link to="/" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">12</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
