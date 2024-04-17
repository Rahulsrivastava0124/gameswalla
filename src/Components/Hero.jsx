import React from 'react';
import Slide1 from '../Images/Slide1.png'
import Slide2 from '../Images/Slide2.png'
import Slide3 from '../Images/Slide3.png'
import Slide4 from '../Images/Slide4.png'
import Slide5 from '../Images/Slide5.png'
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
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      navigation
      pagination={{ clickable: true }}
     className="heroSwiper  md:h-[620px] h-[250px] relative  bg-[url('./Images/heroBackground.png')] bg-no-repeat bg-cover bg-center">
        <SwiperSlide><img src={Slide1} alt="Slider1" className={'object-contain'}/></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="Slider1" className='object-contain'/></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="Slider1" className='object-contain'/></SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="Slider1" className='object-contain'/></SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="Slider1" className='object-contain'/></SwiperSlide>
          {/*<div className={'border w-[25rem] flex bg-gray-100 justify-around m-auto rounded-t-2xl absolute z-[100] bottom-0 start-[35rem]'}>*/}
          {/*    <h2 className={'text-2xl '}>*/}
          {/*        Get a New Account*/}
          {/*    </h2>*/}
          {/*    <button className={'btn btn-error rounded-full'}> Get Account </button>*/}
          {/*</div>*/}
      </Swiper>
    </>
  );
}
