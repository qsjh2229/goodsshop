import React from 'react';
import { Link } from 'react-router-dom';
import feedsList from '../../component/ItemData';

const LightTop = () => {
    const addCommasToNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
    return (
        <div className='page-top'>
        <h1>TOP3</h1>
        <div className='page-top-itembox'>
            {feedsList.filter(item => item.category.includes('light')).map((item,idx) => (
               <Link to={`/detail/${item.id}`} >
                    <div key={item.idx} className='page-top-item' >
                       <div className='p-top-imgbox'> <img src={item.img} alt={item.title} /></div>
                       <div className='p-top-txtbox'> 
                       <span className='p-t-title'>{item.title}</span>
                       <span className='p-t-price'>{addCommasToNumber(item.price)}</span>
                       <span className='p-t-maindes'>{item.maindes}</span>
                       </div>
                        
                    </div>
               </Link>
            )).slice(0,3)
            }
        </div>
    </div>
    );
};

export default LightTop;