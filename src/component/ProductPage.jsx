import { useEffect, useState } from 'react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.scss"
import { API_URL } from '../config/constans';
import dayjs from 'dayjs';
import { Button, message } from 'antd';

const ProductPage = () => {
    const getProduct = () => {
        axios.get(`${API_URL}/products/${id}`)
            .then((result) => {
                setProduct(result.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getProduct();
    }, []);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [shopItem, setShopItem] = useState(1)
    const [arriveDay, setArriveDay] = useState("")
    const [tPrice, setTPrice] = useState("")
  

    useEffect(() => {
        let now = new Date()
        setArriveDay(`${now.getMonth() + 1}/${now.getDate() + 2}`) //방법2
     }, [])
     let mCount = () => {
        if (shopItem <= 0) {
           return
        }
        setShopItem(shopItem - 1)
     }

     useEffect(() => {
        if (product) {
            setTPrice(product.price * shopItem);
        }
    }, [product, shopItem]);
 
    const onClickPerchase = () => {
        axios.post(`${API_URL}/purchase/${id}`)
            .then((result) => {
                message.info(`결제가 완료되었습니다`);
            })
            .catch((error) => {
                message.error(`에러가 발생했습니다: ${error.message}`);
            });
    };

    const onClickDelete = () => {
        axios.delete(`${API_URL}/products/${id}`)
            .then((result) => {
                message.info(`상품이 삭제되었습니다`);
                navigate(-1);
            })
            .catch((error) => {
                message.error(`상품 삭제 중 에러가 발생했습니다: ${error.message}`);
            });
    };

    if (product == null) {
        return <h2>상품 정보를 받아오고 있습니다</h2>;
    }
    console.log(product.price)
 
    let pCount = () => {
       setShopItem(shopItem + 1)
    }
 
  /*   const addCommasToNumber = (number) => {
       return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } */
    return (
      /*   <div className='product-wrap'>
            <button onClick={() => navigate(-1)} id='backBtn'>이전페이지</button>
            <div id='imgBox'>
                <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id='profileBox'>
                <div></div>
                <span className='product-seller'>{product.seller}</span>
            </div>
            <div id="contentBox">
                <span id='name'>{product.name}</span>
                <span id='price'>{product.price}</span>
                <span id='craetAt'>{dayjs(product.createdAt).format('YYYY년MM월DD일')}</span>
                <Button type="primary" danger className='delete' onClick={onClickDelete}>상품 삭제</Button>
                <Button type="primary" danger className='payment' onClick={onClickPerchase} disabled={product.soldout === 1}>결제하기1</Button>
                <span id='des'>{product.des}</span>
            </div>
        </div> */
        <section className='pitem-section'>
         <div className='detail-img'>
            
               <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
           
         </div>
         <div className='detail-txtinfo'>
           
            <span className='title'>{product.name}</span>
            <span className='des'>{product.des}</span>
            <span className='price'>
               {/* {(product.price)} */}
            </span>
            <div className='dis-login'>
               <span>
                  <strong>로그인</strong> 하고 혜택가 획인하기
               </span>
            </div>
            <div className='deli-box'>
               <span className='delivery'>
                  무료배송 / cj대한통운 또는 한진택배
               </span>
               <span className='arrive-info'>
                  <strong>{arriveDay}</strong> 도착 확률 98%
               </span>
            </div>
            <div className='item-count'>
               <button
                  onClick={() => {
                     mCount()
                  }}
               >
                  -
               </button>
               <span>{shopItem}</span>
               <button
                  onClick={() => {
                     pCount()
                  }}
               >
                  +
               </button>
            </div>
            <div className='totoal-price'>
               <span>총 금액</span> <span>{/* addCommasToNumber */(tPrice)}</span>
            </div>
            <div className='add-btnbox'>
               
               <button className='cart-btn'>장바구니</button>
               <Button type="primary" danger className='delete' onClick={onClickDelete}>상품 삭제</Button>
                <Button type="primary" danger className='buy-btn' onClick={onClickPerchase} disabled={product.soldout === 1}>결제하기</Button>
            </div>
         </div>
      </section>
    )
};

export default ProductPage;
