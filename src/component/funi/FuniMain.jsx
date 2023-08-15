import React from 'react';


const FuniMain = () => {
    return (
        <section className='page-main'>
            <div className='pmain-img'>
                <div className='pimgbox'>
                <img src="./img/funi/main.jpg" alt="banner" />
                </div>
                <div className='ptbox'> 
                    <span className='p-main-txt'> 언제 어디서나 </span>
                    <span> Roly Poly Collection은 소파, 암체어로 구성되며
실내와 야외에서 모두 사용이 가능합니다.</span>
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

export default FuniMain;