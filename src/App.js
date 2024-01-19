
import './App.scss';

import MainPage from './pages/MainPage';
import About from './pages/About';
import Lighting from './pages/Lighting';
import HomeAcc from './pages/HomeAcc';
import Funiture from './pages/Funiture';
import { Route , Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import UploadPage from './component/UploadPage';
import ProductPage from './component/ProductPage';
import Kitchen from './pages/Kitchen';
import Detail from './pages/Detail';
import ItemData from './component/ItemData'




function App() {

  return (
    <div className="App">

  <Header/>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
     
      {/* <Route path='/About' element={<About/>}></Route> */}
      <Route path='/lighting' element={<Lighting/>}></Route>
      <Route path='/kitchen' element={<Kitchen/>}></Route>
      <Route path='/homeAcc' element={<HomeAcc/>}></Route>
      <Route path='/funiture' element={<Funiture/>}></Route>
      <Route path='/uploadPage' element={<UploadPage/>}></Route>
      <Route path='/productPage/:id' element={<ProductPage/>}></Route>
      <Route path='/detail/:id' element={<Detail ItemData={ItemData} />}></Route>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

