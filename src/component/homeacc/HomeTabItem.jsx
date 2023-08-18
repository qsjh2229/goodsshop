// LightTabItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeTabItem = ({ data }) => {
  const homeItems = data.filter(item => item.category.includes('home'));
  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className='p-tab-item'>
      <div className='p-tab-itembox'>
        {homeItems.map((item, idx) => (
          <Link to={`/detail/${item.id}`} >
            <div className='page-tab-item'>
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

export default HomeTabItem;
