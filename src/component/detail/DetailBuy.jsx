import React, { useState } from 'react';

const DetailBuy = ({ findHandler }) => {
   const [shopItem, setShopItem] = useState('');

   return (
      <section>
         <div>
            <div className='detail-txt'>
             
               {findHandler.img && (
                  <img src={findHandler.img} alt={findHandler.title} />
               )}
               <span>{findHandler.price}</span>
            </div>
         </div>
         <div>
            {/* 이미지 정보가 있는 경우에만 아래 이미지 태그들을 표시 */}
            {findHandler.subimg1 && (
               <img src={findHandler.subimg1} alt={findHandler.title} />
            )}
            {findHandler.subimg2 && (
               <img src={findHandler.subimg2} alt={findHandler.title} />
            )}
            {findHandler.subimg3 && (
               <img src={findHandler.subimg3} alt={findHandler.title} />
            )}
         </div>
      </section>
   );
};

export default DetailBuy;
