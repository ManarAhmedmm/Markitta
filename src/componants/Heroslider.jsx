import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import hero1 from "../img/hero1.png";

function Heroslider() {
  return (
    <>
      <style>
        {`
        
          .mySwiper .swiper-pagination-bullet {
            background-color: #8C756A;  
            width: 12px;
            height: 12px;
          }

      
          .mySwiper .swiper-pagination-bullet-active {
            background-color: #6B5B95;  
          }
        `}
      </style>

      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 controller</h3>
                <p>Windows 12/8/2023 vp</p>
                <Link to="/" className="btn">Shop Now</Link>
              </div>
              <img src={hero1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 controller</h3>
                <p>Windows 12/8/2023 vp</p>
                <Link to="/" className="btn">Shop Now</Link>
              </div>
              <img src={hero1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 controller</h3>
                <p>Windows 12/8/2023 vp</p>
                <Link to="/" className="btn">Shop Now</Link>
              </div>
              <img src={hero1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Heroslider;