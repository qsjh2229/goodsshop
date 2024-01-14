import React from 'react';

import './page.scss'
import KitchenBanner from '../component/kitchen/KitchenBanner';
import KitchentMain from '../component/kitchen/KitchentMain';
import KitchenTop from '../component/kitchen/KitchenTop';
import KitchenTab from '../component/kitchen/KitchenTab';
import add from "../img/int.jpg"



const Kitchen = () => {
    return (
        <main className='section'>
            
         <KitchenBanner></KitchenBanner>
         <KitchentMain></KitchentMain>
         <KitchenTop></KitchenTop>
         <KitchenTab></KitchenTab>
         <div className='page-add'>
            <div className='page-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="" /></div>
            <div className='page-add2'> <img src={add} alt="page-add1" /> </div>
         </div>

        
        </main>
    );
};

export default Kitchen;