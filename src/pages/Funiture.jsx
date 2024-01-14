import './page.scss'
import FuniBanner from '../component/funi/FuniBanner';
import FuniMain from '../component/funi/FuniMain';
import FuniTop from '../component/funi/FuniTop';
import FuniTab from '../component/funi/FuniTab';
import add from "../img/int.jpg"
 
const Small = () => {
    return (
        <div>
              <main className='section'>
            
            <FuniBanner></FuniBanner>
            <FuniMain></FuniMain>
            <FuniTop></FuniTop>
            <FuniTab></FuniTab>
            <div className='page-add'>
               <div className='page-add1'><img src="../img/cup/s-kic-10-1.jpg" alt="page-add1" /></div>
               <div className='page-add2'> <img src={add} alt="page-add1" /> </div>
            </div>
   
           
           </main> 
        </div>
    );
};

export default Small;