import React from 'react';

import './page.scss'
import LightBanner from '../component/kitchen/LightBanner';
import LinghtMain from '../component/kitchen/LinghtMain';
import LightTop from '../component/kitchen/LightTop';
import LightTab from '../component/kitchen/LightTab';



const Kitchen = () => {
    return (
        <main className='section'>
            
         <LightBanner></LightBanner>
         <LinghtMain></LinghtMain>
         <LightTop></LightTop>
         <LightTab></LightTab>
         <div className='page-add'>
            <div className='page-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="" /></div>
            <div className='page-add2'></div>
         </div>

        
        </main>
    );
};

export default Kitchen;