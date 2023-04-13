import React, { useEffect } from "react";

import "./HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";
import Loader from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import {
  fetchProductsAsync,
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchProductsAsync(100));
  }, []);

  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);

  let tops = products.filter((pro) => pro.category === categories[7]);
  let mensWatches = products.filter((pro) => pro.category === categories[12]);
  let lighting = products.filter((pro) => pro.category === categories[19]);
  let furniture = products.filter((pro) => pro.category === categories[6]);
  let homeDecoration = products.filter((pro) => pro.category === categories[5]);
  let groceries = products.filter((pro) => pro.category === categories[4]);
  let smartphones = products.filter((pro) => pro.category === categories[0]);
  let laptops = products.filter((pro) => pro.category === categories[1]);

  return (
    <main>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See Our Top Products</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tops} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[19]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={lighting} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={laptops} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[12]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={mensWatches} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[6]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={furniture} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={smartphones} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[5]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={homeDecoration} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[4]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={groceries} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
