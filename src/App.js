
import './App.scss';

import MainPage from './pages/MainPage';
import All from './pages/All';
import Tool from './pages/Lighting';
import Acc from './pages/HomeAcc';
import Small from './pages/Funiture';
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
      <Route path='/tool' element={<Tool/>}></Route>
      <Route path='/acc' element={<Acc/>}></Route>
      <Route path='/small' element={<Small/>}></Route>
      <Route path='/uploadPage' element={<UploadPage/>}></Route>
      <Route path='/productPage/:id' element={<ProductPage/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

