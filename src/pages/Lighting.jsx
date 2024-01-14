import React from 'react';

import './Lighting.scss'
import LightBanner from '../component/light/LightBanner';
import LinghtMain from '../component/light/LinghtMain';
import LightTop from '../component/light/LightTop';
import LightTab from '../component/light/LightTab';
import add from "../img/int.jpg"

const Lighting = () => {
    return (
        <main className='light-se'>
            
         <LightBanner></LightBanner>
         <LinghtMain></LinghtMain>
         <LightTop></LightTop>
         <LightTab></LightTab>
         <div className='light-add'>
            <div className='light-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="" /></div>
            <div className='page-add2'> <img src={add} alt="page-add1" /> </div>
         </div>

        
        </main>
    );
};

export default Lighting;