import React from 'react';


const LinghtMain = () => {
    return (
        <section className='light-main'>
            <div className='lmain-img'>
                <div className='limgbox'>
                <img src="./img/light/main.jpg" alt="banner" />
                </div>
                <div className='ltbox'> 
                    <span className='l-main-txt'> 루체플렌 </span>
                    <span> 클래식 하면서도 유행을 타지 않는, <br/> 고품질의 소재와 장인정신 이 모든 요소의 조화</span>
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

export default LinghtMain;