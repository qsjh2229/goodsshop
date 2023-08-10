import React from 'react';
import ScrollPosition from '../specail/ScrollPosition';
const IntBrand = () => {
  const scrollPosition = ScrollPosition()
  let targetHeight;
  const windowWidth = window.innerWidth;
 
  if (windowWidth >= 1400) {
    targetHeight = 850;
  }
  else if (windowWidth >= 1200) {
    targetHeight = 700;
  } else if (windowWidth >= 768) {
    targetHeight = 500;
  } else if(windowWidth >= 468){
    targetHeight = 400;
  }else{
    targetHeight = 200;
  }


  return (
    <div div className='int-brand'>
      <h1 className='trend-title'>TRENDY BRAND</h1>
   <div className={`brand-wrap ${
            scrollPosition >= targetHeight ? "originPosition" : ""
           
          } `
          }>
        <div className='brand-main'>
         <div className='bmain'>
         <img src='./img/light/s-light1.jpg' alt="루이스 폴센" />
         </div>
         <div className='main-txt'>
          <span className='m-brand'>LOUIS POULSEN</span>
          <span className='m-title'>PH 5 Hues of Orange</span>
          <span className='m-des'>덴마크 디자인 조명의 대표적인 아이콘이라고 할 수 있는 Louis Poulsen의 PH5입니다.
  PH 5는 1925-1926 three shade을 디자인한 폴 헤닝 센이 1958년에 디자인해 최다 판매를 기록한 베스트셀러 조명입니다. 전 세계적으로 가장 인기 있고 대중적이며 콜렉터와 수많은 디자인 애호가들을 매혹시킨 조명입니다. 최다 판매된 조명인 만큼 다양한 공간 어디에나 자연스럽게 어울리는 매력적인 조명입니다. 다양한 컬러로 만나보실 수 있으며 서로 다른 컬러를 믹스&매치하면 공간을 보다 더 감각적인 분위기로 연출 할 수 있는 조명입니다.</span>
         </div>
        </div>
        <div className='brand-side'>
          <div className='small-item'>
            <div className='s-img'>
            <img src='./img/light/s-light2.jpg' alt="루이스 폴센" />
            </div>
            <div className='s-textbox'>
              <span className='brand'>LOUIS POULSEN</span>
              <span className='s-title'> AJ 플로어 </span>
              <span className='s-des'> AJ 플로어</span>
          <span className='m-des'>덴마크 디자인 조명의 대표적인 아이콘이라고 할 수 있는 Louis Poulsen의 PH5입니다.
  PH 5는 1925-1926 three shade을 디자인한 폴 헤닝 센이 1958년에 디자인해 최다 판매를 기록한 베스트셀러 조명입니다. 전 세계적으로 가장 인기 있고 대중적이며 콜렉터와 수많은 디자인 애호가들을 매혹시킨 조명입니다. 최다 판매된 조명인 만큼 다양한 공간 어디에나 자연스럽게 어울리는 매력적인 조명입니다. 다양한 컬러로 만나보실 수 있으며 서로 다른 컬러를 믹스&매치하면 공간을 보다 더 감각적인 분위기로 연출 할 수 있는 조명입니다. </span>
            </div>
          </div>
          <div className='small-item'>
            <div className='s-img'>
            <img src='./img/light/s-light3.jpg' alt="루이스 폴센" />
            </div>
            <div className='s-textbox'>
              <span className='brand'>LOUIS POULSEN</span>
              <span className='s-title'>VL STUDIO TABLE/FLOOR </span>
              <span className='s-des'> VL STUDIO TABLE/FLOOR</span>
          <span className='m-des'>덴마크 디자인 조명의 대표적인 아이콘이라고 할 수 있는 Louis Poulsen의 PH5입니다.
  PH 5는 1925-1926 three shade을 디자인한 폴 헤닝 센이 1958년에 디자인해 최다 판매를 기록한 베스트셀러 조명입니다. 전 세계적으로 가장 인기 있고 대중적이며 콜렉터와 수많은 디자인 애호가들을 매혹시킨 조명입니다. 최다 판매된 조명인 만큼 다양한 공간 어디에나 자연스럽게 어울리는 매력적인 조명입니다. 다양한 컬러로 만나보실 수 있으며 서로 다른 컬러를 믹스&매치하면 공간을 보다 더 감각적인 분위기로 연출 할 수 있는 조명입니다. </span>
            </div>
          </div>
          <div className='small-item'>
            <div className='s-img'>
            <img src='./img/light/s-light1.jpg' alt="루이스 폴센" />
            </div>
            <div className='s-textbox'>
              <span className='brand'>LOUIS POULSEN</span>
              <span className='s-title'> PH 5 Hues of Orange </span>
              <span className='s-des'> PH 5 Hues of Orange</span>
          <span className='m-des'>덴마크 디자인 조명의 대표적인 아이콘이라고 할 수 있는 Louis Poulsen의 PH5입니다.
  PH 5는 1925-1926 three shade을 디자인한 폴 헤닝 센이 1958년에 디자인해 최다 판매를 기록한 베스트셀러 조명입니다. 전 세계적으로 가장 인기 있고 대중적이며 콜렉터와 수많은 디자인 애호가들을 매혹시킨 조명입니다. 최다 판매된 조명인 만큼 다양한 공간 어디에나 자연스럽게 어울리는 매력적인 조명입니다. 다양한 컬러로 만나보실 수 있으며 서로 다른 컬러를 믹스&매치하면 공간을 보다 더 감각적인 분위기로 연출 할 수 있는 조명입니다. </span>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default IntBrand;