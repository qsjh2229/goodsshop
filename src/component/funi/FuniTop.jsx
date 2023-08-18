import React from 'react';
import feedsList from '../ItemData';
import { Link } from 'react-router-dom';

const HomeTop = () => {
  const filteredItems = feedsList.filter(item => item.category.includes('funi') && item.sell === 'top3');
  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log('Filtered Items:', filteredItems);

  return (
    <div className='page-top'>
      <h1>TOP3</h1>
      <div className='page-top-itembox'>
        {filteredItems.map((item, idx) => (
          <Link to={`/detail/${item.id}`}>
            <div key={item.idx} className='page-top-item'>
              <div className='p-top-imgbox'><img src={item.img} alt={item.title} /></div>
              <div className='p-top-txtbox'>
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

export default HomeTop;
