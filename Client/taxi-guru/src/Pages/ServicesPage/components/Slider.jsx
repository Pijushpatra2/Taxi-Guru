import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import home_taxi from "/images/home/home_taxi.png";
import about1 from "/images/about us/about1.png";
import about2 from "/images/about us/about2.png";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './slider.css';
export default function Slider() {
  return (
    <div className="container w-[50%]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
     
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={about1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about1} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controller">
        
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
