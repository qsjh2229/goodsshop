import { IoMdFlower } from "react-icons/io";
import React, { useState, useEffect } from "react";
import IntBrand from "../component/IntBrand";
import MainSlide from "../component/MainSlide";
import LastPiece from "../component/LastPiece"
import MdPick from "../component/MdPick";
import { API_URL } from "../config/constans";
import ScrollPosition from '../specail/ScrollPosition';
import axios from "axios";
import { Link } from "react-router-dom";
let targetHeight;
const scrollPosition = ScrollPosition()
const windowWidth = window.innerWidth;
const MainPage = () => {
  if (windowWidth >= 1200) {
    targetHeight = 900;
  } else if (windowWidth >= 768) {
    targetHeight = 800;
  } else if(windowWidth >= 468){
    targetHeight = 600;
  }else{
    targetHeight = 500;
  }


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
      <div className="products">
        <h1>Product</h1>
        <div id="productList"  className={`p-list ${
            scrollPosition >= targetHeight ? "originPosition" : ""
           
          } `
          }>
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
