import React from 'react';

const DetailSub = ({findHandler}) => {
    return (
        <section className='sub-im-section'>
        {/* 이미지 정보가 있는 경우에만 아래 이미지 태그들을 표시 */}
     <div className='sub-box'>

             <span className='des-title'>{findHandler.title}</span>
            


            {findHandler.subimg1 && (
               <img src={findHandler.subimg1} alt={findHandler.title} />
            )}
             <span className='des-des'>{findHandler.des}</span>
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

export default DetailSub;