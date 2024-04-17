import AdSlide1 from '../Images/AdSlide1.png'
import AdSlide2 from '../Images/AdSlide2.png'
import AdSlide3 from '../Images/AdSlide3.png'
import AdSlide4 from '../Images/AdSlide4.png'
import './Css/Celebrities.css'
// import Swiper core and required modules
import { Pagination, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import React from "react";

export const Celebrities = () => {
    return (
        <div className="md:my-16 my-8">
            <h1 className=" text-red-700 font-bold mb-10 bg-gray-200   p-3 mx-8 md:mx-16 rounded-2xl md:text-4xl text-2xl">
                Listen To What The Celebrities Say About Us
            </h1>
            <Swiper
                // install Swiper modules
                modules={[Pagination, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
                pagination={{clickable: true}}
                className="Celebrities w-[80%]"
            >
                <SwiperSlide><img src={AdSlide1} alt="AdSlide" className=""/></SwiperSlide>
                <SwiperSlide><img src={AdSlide2} alt="AdSlide" className=""/></SwiperSlide>
                <SwiperSlide><img src={AdSlide3} alt="AdSlide" className=""/></SwiperSlide>
                <SwiperSlide><img src={AdSlide4} alt="AdSlide" className=""/></SwiperSlide>
            </Swiper>
        </div>
    )
}
