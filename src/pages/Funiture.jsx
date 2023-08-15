import './page.scss'
import FuniBanner from '../component/funi/FuniBanner';
import FuniMain from '../component/funi/FuniMain';
import FuniTop from '../component/funi/FuniTop';
import FuniTab from '../component/funi/FuniTab';


const Small = () => {
    return (
        <div>
              <main className='section'>
            
            <FuniBanner></FuniBanner>
            <FuniMain></FuniMain>
            <FuniTop></FuniTop>
            <FuniTab></FuniTab>
            <div className='page-add'>
               <div className='page-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="" /></div>
               <div className='page-add2'></div>
            </div>
   
           
           </main> 
        </div>
    );
};

export default Small;