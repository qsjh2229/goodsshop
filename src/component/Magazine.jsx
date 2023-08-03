import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Magazine = () => {
  return (
    <div className="magazine">
      <div className="container">
        <div className="titleWrap"> </div>
        <div
          className="magazineList"
        >
          <div className="magazine-box">
            {/*  <span className="m"> M </span>
            <span className="al"> A </span>
            <span className="g"> G </span>
            <span className="a2"> A </span>
            <span className="z"> Z </span>
            <span className="i"> I </span>
            <span className="n"> N </span>
            <span className="e"> E </span> */}
          </div>

          <Swiper
            className="swiper-wrap"
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={8}
            autoplay={{
              delay: 555545500,
              disableOnInteraction: true,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="mg-img">
              <img src="img/magazine1.jpg" alt="" />
              <img src="img/magazine1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="mg-img">
              <img src="img/magazine1.jpg" alt="" />
              <img src="img/magazine1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="mg-img">
              <img src="img/magazine2.jpg" alt="" />
              <img src="img/magazine2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="mg-img">
              <img src="img/magazine3.jpg" alt="" />
              <img src="img/magazine3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="mg-img">
              <img src="img/magazine4.jpg" alt="" />
              <img src="img/magazine4.jpg" alt="" />
            </SwiperSlide>
          
         
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
