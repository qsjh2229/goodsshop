import { IoMdFlower } from "react-icons/io";
import React, { useState, useEffect } from "react";
import IntBrand from "../component/IntBrand";
import MainSlide from "../component/MainSlide";
import LastPiece from "../component/LastPiece"
import MdPick from "../component/MdPick";
import { API_URL } from "../config/constans";
import Mainvideo from '../component/Mainvideo'
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { CgSoftwareDownload } from "react-icons/cg"; 



const MainPage = () => {
  const navigate = useNavigate();



  const [products, setProduct] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/products`;

    axios
      .get(url)
      .then((result) => {
        const products = result.data.product;
        setProduct(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);
  return (
    <div>
     
      <MainSlide />
      <MdPick  />
      <IntBrand></IntBrand>
      <Mainvideo></Mainvideo>
      <div className="products">
        <h1>Product</h1>          <button className="btn" onClick={()=>{navigate('/UploadPage')}}><CgSoftwareDownload /></button>
        <div id="productList"  className="p-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={product.id}>
               { product.soldout === 1? <div className="product-blur"> <span> soldout</span></div> : null}
                <Link
                  to={`/productPage/${product.id}`}
                  className="product-link"
                >
                  <div>
                    <img
                      src={`${API_URL}/${product.imageUrl}`}
                      alt="sdf"
                      className="product-img"
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <IoMdFlower className="product-avatar" />
                      <span className="seller">{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
     
     <LastPiece></LastPiece>
     
    </div>
  );
};

export default MainPage;