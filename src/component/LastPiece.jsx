import React from 'react';
import last1 from '../img/lastpiece/lastpiece1.jpg'
const LastPiece = () => {
  return (
    <div className='lastpiece'>

     <div className='lastwrap'>
        <div className='txtbox'>
          <div>
          <h1>LAST PIECE</h1>
            <span className='last-title'>공간 구성 기억</span>
            <span className='last-price'><strong>유인영 </strong>  _ 2,350,000</span>
            <span className='last-des'>1984년 유김화란 작가의  작품 '기억'을 모티보로 현대적으로 재해석한 유김화란 작가의 딸 유인영 작가의 유인영 작가의 헌정작 같은 작품
              작품성과 실용성을 모두 갖춘 실 생활에서도 잘 묻어날 수 있게 재해석한 오브제들이다.
               </span>
            <button> 모두보기 </button>
          </div>
        </div>
        <div className='imgbox'>
          <img src={last1} alt="lastpiece" />
        </div>
     </div>
      
    </div>
  );
};

export default LastPiece;