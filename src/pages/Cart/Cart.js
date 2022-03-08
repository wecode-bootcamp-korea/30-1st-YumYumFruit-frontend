import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartTable from 'pages/Cart/CartTable/CartTable';
import { GUIDE_LIST } from './guidedata';
import { TABMENU_DATA } from './tabmenudata';
import './Cart.scss';

function Cart() {
  const [currentId, setCurrentId] = useState(1);
  const [cartList, setCartList] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);

  const clickHandler = id => {
    setCurrentId(id);
  };

  useEffect(() => {
    fetch('http://10.58.4.85:8000/users/shoppingcart')
      // fetch('/data/cartdata.json')
      .then(response => response.json())
      .then(data => {
        setCartList(data.cart_info);
        setUserInfoList(data.user_info);
      });
  }, []);

  const MAPPING_OBJ = {
    1: <CartTable cartList={cartList} />,
    2: <div>해외배송</div>,
  };

  return (
    <div className="cart">
      <div className="container">
        <header className="titleArea">
          <h2 className="title">SHOPPING CART</h2>
        </header>
        <section className="cartArea">
          <div className="userInfoArea">
            <div className="member">
              <span>{userInfoList.user_name} 님의 장바구니</span>
            </div>
            <ul className="mileage">
              <li className="item">가용적립금 : {userInfoList.user_point}원</li>
            </ul>
          </div>
          {/* tabMenu */}
          <ul className="tabs">
            {TABMENU_DATA.CATEGORY_ARR.map(category => {
              const { id, name, src } = category;
              return (
                <li
                  key={id}
                  className="tabMenu"
                  onClick={() => clickHandler(id)}
                >
                  <Link to={src} className="link">
                    {name} ({cartList.length})
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="cartTableArea">
            {/* CartTable */}
            {MAPPING_OBJ[currentId]}
            <div className="orderBtnArea">
              <Link to="/order/orderform" className="btn totalBtn">
                전체상품주문
              </Link>
              <Link to="/order/orderform" className="btn checkBtn">
                선택상품주문
              </Link>
              <Link to="/" className="btn goToMainBtn">
                쇼핑계속하기
              </Link>
            </div>
            <div className="cartGuide">
              <h3 className="title">이용안내</h3>
              <div className="content">
                <h4 className="subTitle">장바구니 이용안내</h4>
                <ul>
                  {GUIDE_LIST.cartGuide.map(item => (
                    <li key={item.id} className="item">
                      {item.content}
                    </li>
                  ))}
                </ul>
                <h4 className="subTitle">무이자할부 이용안내</h4>
                <ul>
                  {GUIDE_LIST.payingGuide.map(item => (
                    <li key={item.id} className="item">
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cart;
