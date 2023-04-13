import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductSinglePage.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductSingleAsync,
  getProductSingle,
  getSingleProductStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import { formatPrice } from "../../utils/helpers";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(getProductSingle);
  const [activeImage, setActiveImage] = useState(0);
  const [activeImageSrc, setActiveImageSrc] = useState();

  const productSingleStatus = useSelector(getSingleProductStatus);

  const handleClick = (_, index) => {
    setActiveImageSrc(product.images[index]);
    setActiveImage(index);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(fetchProductSingleAsync(id));
    };
    fetchProduct();
  }, [dispatch, id]);

  useEffect(() => {
    setActiveImageSrc(product?.images?.[0]);
  }, [product]);

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prev) => {
      let temp = prev + 1;
      if (temp > product?.stock) temp = product?.stock;
      return temp;
    });
  };
  const decreaseQty = () => {
    setQuantity((prev) => {
      let temp = prev - 1;
      if (temp < 1) temp = 1;
      return temp;
    });
  };

  return (
    <section className="bg-whitesmoke">
      <div className="product-single">
        <div className="container">
          <div className="product-single-content bg-white grid">
            <div className="product-single-l">
              <div className="product-img">
                <div className="product-img-zoom">
                  <img src={activeImageSrc} alt="IMAGE" className="img-cover" />
                </div>
                <div className="product-img-thumbs flex align-center my-2">
                  {product?.images?.map((img, index) => (
                    <div
                      className={`thumb-item ${
                        index === activeImage ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => handleClick(img, index)}
                    >
                      <img src={img} alt="" className="img-cover" />
                    </div>
                  )) ?? null}
                </div>
              </div>
            </div>
            <div className="product-single-r">
              <div className="product-details font-manrope">
                <div className="title fs-20 fw-5">{product?.title}</div>
                <div>
                  <p className="para fw-3 fs-15">{product?.description}</p>
                </div>
                <div className="info flex align-center flex-wrap fs-14">
                  <div className="rating">
                    <span className="text-orange fw-5">Rating:</span>
                    <span className="mx-1">{product?.rating}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Brand:</span>
                    <span className="mx-1">{product?.brand}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Category:</span>
                    <span className="mx-1 text-capitalize">
                      {product?.category
                        ? product.category.replace("-", " ")
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="price">
                  <div className="flex align-center">
                    <div className="old-price text-gray">
                      {" "}
                      {formatPrice(product?.price)}
                    </div>
                    <span className="fs-14 mx-2 text-dark">
                      Inclusive of all taxes
                    </span>
                  </div>
                  <div className="flex align-center my-1">
                    <div className="new-price fw-5 font-poppins fs-24 text-orange">
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className="discount bg-orange fs-13 text-white fw-6 font-poppins">
                      {product?.discountPercentage}% OFF
                    </div>
                  </div>
                </div>
                <div className="qty flex align-center my-4">
                  <div className="qty-text">Quantity:</div>
                  <div className="qty-change flex align-center mx-3">
                    <button
                      type="button"
                      onClick={() => decreaseQty()}
                      className="qty-decrease flex align-center justify-center"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="qty-value flex align-center justify-center">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => increaseQty()}
                      className="qty-increase flex align-center justify-center"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  {/* if  out of stock */}
                  {product?.stock === 0 ? (
                    <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
                      out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="btns">
                  <button type="button" className="add-to-cart-btn btn">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="btn-text mx-2">Add To Cart</span>
                  </button>
                  <button type="button" className="buy-now btn mx-3">
                    <span className="btn-text">buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSinglePage;
