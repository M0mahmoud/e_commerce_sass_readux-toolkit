import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TopCategories.scss";

import { getAllCategories } from "../../store/categorySlice";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  LAPTOPS,
  LIGHTING,
  automotive,
  fragrances,
  furniture,
  groceries,
  home,
  mensShirts,
  menshoes,
  menswatches,
  motorcycle,
  shoes,
  skincare,
  smartphones,
  sunglasses,
  womensBags,
  womensDresses,
  womensJewellery,
  womensWatches,
} from "../../assets/catg";
const imgs = [
  smartphones,
  LAPTOPS,
  fragrances,
  skincare,
  groceries,
  home,
  furniture,
  mensShirts,
  womensDresses,
  shoes,
  mensShirts,
  menshoes,
  menswatches,
  womensWatches,
  womensBags,
  womensJewellery,
  sunglasses,
  automotive,
  motorcycle,
  LIGHTING,
];
const TopCategories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <div className="topcatg">
      <div className="">
        <div className="title-md">
          <h3>See Our Top Products</h3>
        </div>

        <Swiper
          loop="true"
          autoplay={{
            delay: 1200,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            991: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            767: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            500: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {categories?.map((el, index) => (
            <SwiperSlide key={el}>
              <Link to={`category/${el}`} className="top-catg-img my-4">
                <h3>{el.replace("-", " ")}</h3>
                <img src={imgs[index]} alt="IMAGES" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCategories;
