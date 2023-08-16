import React from 'react';
import  dg from'../../img/homeacc/homeaccbanner.jpg';



const HomeBanner = () => {
    return (
        <div className='page-banner'>
            <img src={dg} alt="banner" />
            <div className='page-info'>
                <span className='pmain-txt'>공간의 품격 </span>
                <span className='psub-txt'>하나의 예술작품 Villeroy & Boch </span>
                <button> 더 알아보기 </button>
                
            </div>
            
        </div>
    );
};

export default HomeBanner;