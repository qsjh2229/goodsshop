import React from 'react';
import  dg from'../../img/funi/funibanner.jpg';



const FuniBanner = () => {
    return (
        <div className='page-banner'>
            <img src={dg} alt="banner" />
            <div className='page-info'>
                <span className='pmain-txt'>편안하고 아름다운 공간 </span>
                <span className='psub-txt'>2023 디자인 어워드 선정 vottachi </span>
                <button> 더 알아보기 </button>
                
            </div>
            
        </div>
    );
};

export default FuniBanner;