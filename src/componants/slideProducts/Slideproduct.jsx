import React from 'react'
import Products from './Products'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay ,  Pagination , Navigation } from 'swiper/modules';
function Slideproduct({data , title }) {
  return (
    <div className='slide_producte slide'>
        <div className="container">
            <div className="top_slide">
                <h2>{title}</h2>
                <p>Check out our new arrivals of the season</p>
            </div>
                 
        </div>
        <div className="container">
              <Swiper
  loop={data.length > 5}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  slidesPerView={data.length < 5 ? data.length : 5}
  spaceBetween={20}
  navigation={true}
  modules={[Autoplay, Navigation]}
  className="mySwiper"
>
            {data.map((product) => (
                <SwiperSlide key={product.id}>
                    <Products product={product} />
                </SwiperSlide>
            ))}
      </Swiper>
        </div>
    </div>
  )
}

export default Slideproduct
