import React from 'react';


const HomeMain = () => {
    return (
        <section className='page-main'>
            <div className='pmain-img'>
                <div className='pimgbox'>
                <img src="./img/cup/main.jpg" alt="banner" />
                </div>
                <div className='ptbox'> 
                    <span className='p-main-txt'> WEDGWOOD </span>
                    <span> 전통적인 패턴과 기술, 장인정신에 대한 사랑과 존경, <br/> 고확고한 안목으로 아름다운 수공예 예술 작품들의 가치</span>
                </div>
            </div>
           {/*  <div className='lmain-img lmain-img2'>
            <div className='ltbox '> 
                    <span className='l-main-txt'> 루체플렌 </span>
                    <span> 클래식 하면서도 유행을 타지 않는, <br/> 고품질의 소재와 장인정신 이 모든 요소의 조화</span>
                </div>
                <div className='limgbox'>
                <img src="./img/light/main.jpg" alt="banner" />
                </div>
               
            </div> */}
            
        </section>
    );
};

export default HomeMain;