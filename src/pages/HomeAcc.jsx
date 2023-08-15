import React from 'react';
import './page.scss'
import HomeBanner from '../component/homeacc/HomeBanner';
import HomeMain from '../component/homeacc/HomeMain';
import HomeTop from '../component/homeacc/HomeTop';
import HomeTab from '../component/homeacc/HomeTab';


const Acc = () => {
    return (
        <div>
            <main className='section'>
            
            <HomeBanner></HomeBanner>
            <HomeMain></HomeMain>
            <HomeTop></HomeTop>
            <HomeTab></HomeTab>
            <div className='page-add'>
               <div className='page-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="" /></div>
               <div className='page-add2'></div>
            </div>
   
           
           </main> 
        </div>
    );
};

export default Acc;