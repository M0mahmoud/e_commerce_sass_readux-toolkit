import React from "react";
import { Link } from "react-router-dom";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import imageOne from "../../assets/banner/shopping-cart-01.jpg";
import imageTwo from "../../assets/banner/shopping-cart-02.jpg";
import imageThree from "../../assets/banner/shopping-cart-03.jpg";
import imageFour from "../../assets/banner/shopping-cart-04.png";

const images = [imageOne, imageTwo, imageThree, imageFour];

const Slider = () => {
  return (
    <section className="slider ">
      <div className="slider__content">
        <Swiper
          loop="true"
          autoplay={{
            delay: 1800,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images?.map((el) => (
            <SwiperSlide key={el}>
              <Link to={`/`} className="">
                <div className="slider__item">
                  <div className="slider__img">
                    <img
                      src={el}
                      alt="Slider Image"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        objectPosition: "right",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
