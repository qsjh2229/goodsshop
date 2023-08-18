import React from "react"
import video from "../img/mainvideo.mp4"
import ScrollPosition from "../specail/ScrollPosition"
const Mainvideo = () => {
   let targetHeight
   const scrollPosition = ScrollPosition()
   const windowWidth = window.innerWidth
   if (windowWidth >= 1400) {
      targetHeight = 1800
   } else if (windowWidth >= 1200) {
      targetHeight = 1500
   } else if (windowWidth >= 768) {
      targetHeight = 1300
   } else if (windowWidth >= 468) {
      targetHeight = 600
   } else {
      targetHeight = 500
   }
   return (
      <div
         className={`mp-video ${
            scrollPosition >= targetHeight ? "originPosition" : ""
         } `}
      >
         <div className='mp-vbox'>
            <video loop='true' muted='true' autoplay='true'>
               <source src={video} type='video/mp4' />
            </video>
         </div>
         <div className='mp-tbox'>
            <div className='mp-intxt'>
               <span>
                  단순한 기능으로써의 식기가 아닌 <br /> 예술적인 오브제 <br />{" "}
                  ASTIE DE BILLATE
               </span>
               <button> 자세히 보기</button>
            </div>
         </div>
      </div>
   )
}

export default Mainvideo
