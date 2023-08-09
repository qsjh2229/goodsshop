import React from 'react';
import feedsList from '../../component/ItemData';

const LightTop = () => {
    return (
        <div className='light-top'>
        <h1>TOP3</h1>
        <div className='light-top-itembox'>
            {feedsList.filter(item => item.category.includes('light')).map((item,idx) => (
                <div key={item.idx} className='light-top-item' >
                   <div className='l-top-imgbox'> <img src={item.img} alt={item.title} /></div>
                   <div className='l-top-txtbox'> 
                   <span className='l-t-title'>{item.title}</span>
                   <span className='l-t-price'>{item.price}</span>
                   <span className='l-t-maindes'>{item.maindes}</span>
                   </div>
                    
                </div>
            )).slice(0,3)
            }
        </div>
    </div>
    );
};

export default LightTop;