// LightTabItem.js

import { Link } from 'react-router-dom';
import React from 'react';

const KitchenTabItem = ({ data }) => {
  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className='p-tab-item'>
      <div className='p-tab-itembox'>
        {data.filter(item => item.category.includes('kitchen')).map((item, idx) => (
       <Link to={`/detail/${item.id}`}>
            <div key={item.idx} className='page-tab-item'>
              <div className='p-tab-imgbox'><img src={item.img} alt={item.title} /></div>
              <div className='p-tab-txtbox'>
                <span className='p-t-title'>{item.title}</span>
                <span className='p-t-price'>{addCommasToNumber(item.price)}</span>
                <span className='p-t-maindes'>{item.maindes}</span>
              </div>
            </div>
       </Link>
        ))}
      </div>
    </div>
  );
};

export default KitchenTabItem;
