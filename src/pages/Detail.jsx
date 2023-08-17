import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBuy from '../component/detail/DetailBuy';
import DetailSub from '../component/detail/DetailSub';

const Detail = ({ ItemData }) => {
   let { id } = useParams();
   
   
   // data 배열이 올바르게 초기화되었는지 확인
   if (!ItemData || !Array.isArray(ItemData)) {
      return <div>데이터가 올바르게 전달되지 않았습니다.</div>;
   }

   let findHandler = ItemData.find((x) => x.id === id);
   console.log(findHandler.img)

   if (!findHandler) {
      return <div>해당 상품을 찾을 수 없습니다.</div>;
   }

   return (
      <main className='detail-page'>
       <DetailBuy findHandler={findHandler}/>
       <DetailSub findHandler={findHandler}/>
      
    
      </main>
   );
};

export default Detail;
