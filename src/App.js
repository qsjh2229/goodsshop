
import './App.scss';

import MainPage from './pages/MainPage';
import All from './pages/All';
import Lighting from './pages/Lighting';
import HomeAcc from './pages/HomeAcc';
import Funiture from './pages/Funiture';
import { Route , Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import UploadPage from './component/UploadPage';
import ProductPage from './component/ProductPage';


function App() {
  return (
    <div className="App">

  <Header/>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
     
      <Route path='/all' element={<All/>}></Route>
      <Route path='/lighting' element={<Lighting/>}></Route>
      <Route path='/homeAcc' element={<HomeAcc/>}></Route>
      <Route path='/funiture' element={<Funiture/>}></Route>
      <Route path='/uploadPage' element={<UploadPage/>}></Route>
      <Route path='/productPage/:id' element={<ProductPage/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

