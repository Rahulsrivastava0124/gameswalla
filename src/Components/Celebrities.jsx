import AdSlide1 from '../Images/AdSlide1.webp'
import AdSlide2 from '../Images/AdSlide2.webp'
import AdSlide3 from '../Images/AdSlide3.webp'
import AdSlide4 from '../Images/AdSlide4.webp'
import './Css/Celebrities.css'
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

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
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}

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
