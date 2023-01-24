import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const DrinksSlider = ({item_img}) => {
    return (
        <div className='slider_margin'>
            <Swiper
         spaceBetween={30}
        centeredSlides={true}
        cssMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          item_img.map((img,i) => <SwiperSlide key={i}><img className='drinks_slider_img' src={img} alt="" /> 
          </SwiperSlide>)
        }
        
      </Swiper>
        </div>
    );
};

export default DrinksSlider;