import { useEffect, useState } from 'react';
import React from 'react';
import { useParams ,  useNavigate  } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.scss"

const ProductPage = () => {
    const {id}=useParams();
    const navigate =useNavigate() 
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        axios.get(`https://d99143a1-8f38-4232-aa8d-c4845b1d3853.mock.pstmn.io/products/${id}`)
        .then((result)=>{
            setProduct(result.data)

        })
        .catch((err)=>{console.log(err)})
    },[])
    console.log(product)
    if(product == null){
        return <h2> 상품 정포를 받고 있습니다</h2>
    }
    return (
        <div>
            <button onClick={()=>{navigate(-1)}} id='backBtn'>이전페이지</button>
            <div id='imgBox'>
                <img src={`/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id='profileBox'>
               <div ></div>
               <span className='product-seller'> {product.seller}</span>
               
            </div>
            <div id="contentBox">
               <span id='name'> {product.name}</span>
               <span id='price'> {product.price}</span>
               <span id='craetAt'> 2023.08.02 </span>
               <span id='des'> {product.des}</span>
            </div>
        </div>
    );
};

export default ProductPage;