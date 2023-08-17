import React, { useEffect, useState } from "react";

const DetailBuy = ({ findHandler }) => {
  
  const [shopItem, setShopItem] = useState(1);
  const [arriveDay, setArriveDay] = useState("");
  const [tPrice, setTPrice] = useState(findHandler.price * shopItem);
  let pCount = () => {
    setShopItem(shopItem + 1);
   
  };
  
  useEffect(()=>{
   let now = new Date();
 /*   let nextDay = new Date(now.setDate(now.getDate() + 2));
   setArriveDay(nextDay.toLocaleDateString()); */ //문자열 변환 1 리액트에서는 무조건  날짜 문자열 변환하기 
   setArriveDay(`${now.getMonth() + 1}/${now.getDate() + 2}`); //방법2
  },[])
  let mCount = () => {
    if (shopItem <= 0) {
      return;
    }
    setShopItem(shopItem - 1);
  };
  useEffect(() => {
    setTPrice(findHandler.price * shopItem);
  }, [shopItem]);

  return (
    <section className="item-section">
      <div className="detail-img">
        {findHandler.img && (
          <img src={findHandler.img} alt={findHandler.title} />
        )}
      </div>
      <div className="detail-txtinfo">
        <span className="brand">{findHandler.brand}</span>
        <span className="title">{findHandler.title}</span>
        <span className="des">{findHandler.maindes}</span>
        <span className="price">{findHandler.price}</span>
        <div className="dis-login">
          <span>
            <strong>로그인</strong> 하고 혜택가 획인하기
          </span>
        </div>
        <div className="deli-box">
          <span className="delivery">무료배송 / cj대한통운 또는 한진택배</span>
          <span className="arrive-info">
            <strong >{arriveDay}</strong> 도착 확률 98%
          </span>
        </div>
        <div className="item-count">
          <button
            onClick={() => {
              mCount();
            }}
          >
            -
          </button>
          <span>{shopItem}</span>
          <button
            onClick={() => {
              pCount();
            }}
          >
            +
          </button>
        </div>
        <div className="totoal-price">
          <span>총 금액</span> <span>{tPrice}</span>
        </div>
        <div className="add-btnbox">
          <button className="buy-btn">바로구매</button>
          <button className="cart-btn">장바구니</button>
        </div>
      </div>
    </section>
  );
};

export default DetailBuy;

