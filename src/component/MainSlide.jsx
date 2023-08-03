import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const MainSlide = () => {
    return (
        <Swiper className='swiper'
        // install Swiper modules
        style={{
          "--swiper-pagination-color": "lavender",
          "--swiper-navigation-color": "white",
      }}
        modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          }}
          loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')
        
      
      }
      >
        <SwiperSlide className='mainSlide'><img src="img/mainslide/slide1.jpg" alt=" 슬라이드 이미지" /></SwiperSlide>
        <SwiperSlide className='mainSlide'><img src="img/mainslide/slide2.jpg" alt=" 슬라이드 이미지" /></SwiperSlide>
        <SwiperSlide className='mainSlide'><img src="img/mainslide/slide3.jpg" alt=" 슬라이드 이미지" /></SwiperSlide>
        <SwiperSlide className='mainSlide'><img src="img/mainslide/slide5.jpg" alt=" 슬라이드 이미지" /></SwiperSlide>
      
      </Swiper>
    );
};
 export default MainSlide