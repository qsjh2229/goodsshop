import React from 'react';

import './Lighting.scss'
import LightBanner from '../component/light/LightBanner';
import LinghtMain from '../component/light/LinghtMain';
import LightTop from '../component/light/LightTop';
import LightTab from '../component/light/LightTab';


const Lighting = () => {
    return (
        <main className='light-se'>
            
         <LightBanner></LightBanner>
         <LinghtMain></LinghtMain>
         <LightTop></LightTop>
         
         
         <LightTab></LightTab>

           {/*  <LightItem></LightItem> */}
        </main>
    );
};

export default Lighting;