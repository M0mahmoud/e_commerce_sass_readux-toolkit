import React, { useState } from "react";
import "./ProductSinglePage.scss";

const img = "https://dummyimage.com/600x400/000/fff&text=Main+Image";
const thumbs = [
  "https://dummyimage.com/100x100/000/fff&text=Thumb+1",
  "https://dummyimage.com/100x100/000/fff&text=Thumb+2",
  "https://dummyimage.com/100x100/000/fff&text=Thumb+3",
  "https://dummyimage.com/100x100/000/fff&text=Thumb+4",
];
const ProductSinglePage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeImageSrc, setActiveImageSrc] = useState(img);

  const handleClick = (thumb, index) => {
    setActiveImageSrc(thumb);
    setActiveImage(index);
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
                  {thumbs.map((thumb, index) => (
                    <div
                      className={`thumb-item ${
                        index === activeImage ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => handleClick(thumb, index)}
                    >
                      <img src={thumb} alt="" className="img-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="product-single-r">
              <div className="product-details font-manrope">
                <div className="title fs-20 fw-5">HP Laptop G798</div>
                <div>
                  <p className="para fw-3 fs-15">
                    This classy shirt for women gives you a gorgeous look on
                    everyday wear and specially for semi-casual wears.
                  </p>
                </div>
                <div className="info flex align-center flex-wrap fs-14">
                  <div className="rating">
                    <span className="text-orange fw-5">Rating:</span>
                    <span className="mx-1">23.2</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Brand:</span>
                    <span className="mx-1">TECH</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Category:</span>
                    <span className="mx-1 text-capitalize">Category</span>
                  </div>
                </div>
                <div className="price">
                  <div className="flex align-center">
                    <div className="old-price text-gray">1234</div>
                    <span className="fs-14 mx-2 text-dark">
                      Inclusive of all taxes
                    </span>
                  </div>
                </div>
                <div className="qty flex align-center my-4">
                  <div className="qty-text">Quantity:</div>
                  <div className="qty-change flex align-center mx-3">
                    <button
                      type="button"
                      className="qty-decrease flex align-center justify-center"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="qty-value flex align-center justify-center">
                      13
                    </div>
                    <button
                      type="button"
                      className="qty-increase flex align-center justify-center"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  {/* if  out of stock */}
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
