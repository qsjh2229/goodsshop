import React from 'react';
import LightTabItem from './LightTabItem';


const LightTab = () => {
    return (
      <div className='light-tab-wrap'>
        <h1> CATEGORY</h1>
            <div  className='light-tab-btn'>
                <button  type="button" className='ligall'><span>전체보기</span></button>
                <button  type="button" className='pan'><span>팬던트</span></button>
                <button  type="button" className='tab'><span>테이블</span></button>
                <button  type="button" className='fol'><span>플로어</span></button>
                
            </div>
            <LightTabItem></LightTabItem>
      </div>
    );
};

export default LightTab;