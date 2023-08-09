import React from 'react';
import feedsList from '../../component/ItemData';

const LightTabItem = () => {
    return (
        <div className='l-tab-item'>
            
             <div className='l-tab-itembox'>
            {feedsList.filter(item => item.category.includes('light')).map((item,idx) => (
                <div key={item.idx} className='light-tab-item' >
                   <div className='l-tab-imgbox'> <img src={item.img} alt={item.title} /></div>
                   <div className='l-tab-txtbox'> 
                   <span className='l-t-title'>{item.title}</span>
                   <span className='l-t-price'>{item.price}</span>
                   <span className='l-t-maindes'>{item.maindes}</span>
                   </div>
                    
                </div>
            ))
            }
        </div>
        </div>
    );
};

export default LightTabItem;