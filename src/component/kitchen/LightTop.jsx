import React from 'react';
import feedsList from '../../component/ItemData';

const LightTop = () => {
    return (
        <div className='page-top'>
        <h1>TOP3</h1>
        <div className='page-top-itembox'>
            {feedsList.filter(item => item.category.includes('light')).map((item,idx) => (
                <div key={item.idx} className='page-top-item' >
                   <div className='p-top-imgbox'> <img src={item.img} alt={item.title} /></div>
                   <div className='p-top-txtbox'> 
                   <span className='p-t-title'>{item.title}</span>
                   <span className='p-t-price'>{item.price}</span>
                   <span className='p-t-maindes'>{item.maindes}</span>
                   </div>
                    
                </div>
            )).slice(0,3)
            }
        </div>
    </div>
    );
};

export default LightTop;