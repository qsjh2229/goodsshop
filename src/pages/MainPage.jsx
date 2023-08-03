import { IoMdFlower } from "react-icons/io";
import React, { useState, useEffect } from "react"; 

import MainSlide from "../component/MainSlide";
import Magazine from "../component/Magazine";
import Magazine1 from "../component/Magazine2";
import MdPick from "../component/MdPick";


 import axios from "axios"; 
import { Link } from "react-router-dom";

const MainPage = () => {
  const [products, setProduct] = useState([]);
 useEffect(() => {
    let url = "https://d99143a1-8f38-4232-aa8d-c4845b1d3853.mock.pstmn.io/products";
     
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProduct(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 
  console.log(products); 
  return (
    <div>
      {/* <Header></Header> */}
      <MainSlide />
      <MdPick />
      <div className="banner">
          <p>세일세일세일세일세일세일세일세일세일세일세일세일세일</p>
      </div>
      <div className="products">
        <h2>Product</h2>
        <div id="productList" className="p-list">
            
     
  {products.map((product, idx) => {
                        return (
                           <Link to={`/productPage/${idx}`} className="product-link">
                              <div className="product-card" key={idx}>
                                  <div>
                                      <img src={product.imageUrl} alt="sdf" className="product-img" />
                                  </div>
                                  <div className="product-contents">
                                      <span className="product-name">{product.name}</span>
                                      <span className="product-price">{product.pirce}</span>
                                      <div className="product-seller">
                                          <IoMdFlower  className="product-avatar" />
                                          <span className="seller">{product.seller}</span>
                                      </div>
                                  </div>
                              </div>
                           </Link>
                        )
                    }) } 
        </div>
      </div>
      <Magazine />
      <Magazine1></Magazine1>
   
    </div>
  );
};

export default MainPage;
