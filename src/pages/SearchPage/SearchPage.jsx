import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./SearchPage.scss";
import {
  clearSearch,
  fetchSearchProducts,
  getSearchProducts,
  getSearchProductsStatus,
} from "../../store/searchSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchSearchProducts(searchTerm));
  }, [searchTerm]);

  if (searchProducts.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "70vh",
        }}
      >
        <div className="fw-5 text-danger py-5 text-center">
          <h3>No Products</h3>
          <Link className="home_link fw-5" to={"/"}>
            <h3>Back To Home Page</h3>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5 ">
            <div className="title-md">
              <h3>Search Results: </h3>
            </div>
            <br />
            {searchProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={searchProducts} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
