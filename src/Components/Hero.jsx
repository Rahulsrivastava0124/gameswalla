import React from 'react';
import Slide1 from '../Images/Slide1.webp'
import Slide2 from '../Images/Slide2.webp'
import Slide3 from '../Images/Slide3.webp'
import Slide4 from '../Images/Slide4.webp'
import Slide5 from '../Images/Slide5.webp'
import './Css/Hero.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  return (
    <>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      navigation
      pagination={{ clickable: true }}
     className="heroSwiper w-[90%] mt-4 rounded-[20px]">
        <SwiperSlide><img src={Slide1} alt="Slider1"/></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="Slider1"/></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="Slider1"/></SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="Slider1"/></SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="Slider1"/></SwiperSlide>
      </Swiper>
    </>
  );
}
