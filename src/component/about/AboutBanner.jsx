import React from "react";
import ho from"../../img/homeacc/home6-2.jpg"
import about1 from"../../img/about1.png"
import about2 from"../../img/about2.jpg"
import about3 from"../../img/about3.jpg"

const AboutBanner = () => {
  return (
    <section className="about-banner">
      <div className="banner-wrap">
     <div className="banner-top">
          <div className="a-txt-box">
            <span>
            <p>사람을 위한 사람이 하는 디자인</p>
           
             <p>  MUE DESIGN STUDIO</p>
            
            </span>
          </div>
          <img
            className="a-pos-img"
            src="../../img/light/s-light18-1.jpg"
            alt=""
          />
          <div className="a-img-box">
            <img src={ho} alt="" />
          </div>
     </div>
     <div className="m-banner">
           
          <div className="about-box">
          <img src={about3}alt="about-box3" />
         <div className="spanbox">
            <span>
  우리는 당신의 행복을 바랍니다. 일을 하는 공간 , 휴식의 공간, 지나쳐 가는 공간을 MUE 에서 셀렉한 아이템을 통해 구성하여 풍요롭고 편안한 공간으로 구성해 순간의 행복 작은 행복이 모여 우리의 목표를 달성 했으면 좋겠습니다 이것이 MUE 가 존재하는 이유 입니다. 우리는 당신의 행복을 바랍니다.
            </span>
         </div>
          </div>   
          <div className="about-box">
          <img src={about1} alt="about-box1" />
        <div className="spanbox">
            <span>
            우리는 이 순간이 모두에게 가장 아름다운 순간으로 기억 되길 응원합니다. 유행에 민감하지 않길 바랍니다. 우리는 단순함을 좋아하고 단순함을 통해서도 아름다움을 표현 할 수 있다고 생각 합니다. 우리가 소개하는 것들이 당신의 일상을 풍요롭게 하고 행복을 극대화 하는데 도움을 줄 수 있기를 바라며 이것은 MUE의 운영 목표이기도 합니다.
            </span>
        </div>
          </div> 
        <div className="about-box">
          <img src={about2} alt="about-box2" />
        <div className="spanbox"> 
            <span>
            우리는 당신시 원하는 공간을 아름답게 구성하는것을 응원합니다. 좁은 공간이나 넓은 공간, 공간의 제약 없이 MUE 에서 당신의 아이덴티티를 구성하고 그 아이덴티티에 맞춰 당신의 공간을 구성 하는데에 우리가 도움이 되었으면 좋겠습니다          </span>
        </div>
          </div>      
          
        
     </div>
      </div>
    </section>
  );
};

export default AboutBanner;
