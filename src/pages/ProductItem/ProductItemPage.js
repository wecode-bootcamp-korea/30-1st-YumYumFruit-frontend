import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Option from './Option';
import './ProductItemPage.scss';

const ProductItemPage = () => {
  const [productItem, setProductItem] = useState([]); //상세페이지 아이템
  const [optionList, setOptionList] = useState([]); //packaging option
  const [total, setTotal] = useState({
    //상품 총합(개수 and price)
    sumNum: 0,
    noPackaging: {
      quantity: 0,
      option: 'noPackaging',
    },
    packaging: {
      quantity: 0,
      option: 'packaging',
    },
  });

  useEffect(() => {
    fetch('http://10.58.1.244:8000/products/7')
      .then(response => response.json())
      // .then(data => setProductItem(data));
      .then(data => setProductItem(data.data));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/ProductItemPages.json')
  //     .then(response => response.json())
  //     .then(data => setProductItem(data));
  // }, []);

  const addList = e => {
    if (optionList.length === 0) {
      setOptionList(
        optionList.concat({
          name: productItem.name,
          price: productItem.price,
          status: e.target.getAttribute('status'),
          pck: e.target.getAttribute('pck'),
        })
      );
    } else if (
      optionList.length < 2 &&
      optionList[0].status !== e.target.getAttribute('status')
    ) {
      setOptionList(
        optionList.concat({
          name: productItem.name,
          price: productItem.price,
          status: e.target.getAttribute('status'),
          pck: e.target.getAttribute('pck'),
        })
      );
    }
  };

  const cartclick = () => {
    fetch('http://10.58.1.244:8000/users/shoppingcart', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTZ9.Uvl7_ZDwmPHKd-av0nQG5pf5-F29Hv8Tb1fjhZp_o6U',
      },
      // body: JSON.stringify({
      //   product_id: productItem.product_id,
      //   quantity: total.packaging.quantity,
      //   packing_option: total.packaging.option,
      // }),
      body: JSON.stringify([
        {
          product_id: productItem.product_id,
          quantity: total.packaging.quantity,
          packing_option: total.packaging.option,
        },
        {
          product_id: productItem.product_id,
          quantity: total.noPackaging.quantity,
          packing_option: total.noPackaging.option,
        },
      ]),
    })
      .then(res => res.json())
      .then(alert('장바구니에 담겼습니다.'));
    // .then(res => console.log(res));
    // .then(res => {
    //   if (res.success) {
    //     alert("장바구니로 이동")
    //   }
    // })

    // const goToCart = () => {
    //   Navigate('/');
    // }
  };

  if (!productItem.name) {
    return null;
  }

  return (
    <div className="layout">
      <main>
        <div className="itemImage">
          <img
            src="https://user-images.githubusercontent.com/87808288/156104521-3d17cb30-67a0-477d-bcdc-5ad280e6ee40.png"
            alt="테스트를 위한 사진입니다"
          />
        </div>
        <div className="infoArea">
          <h3>{productItem.name}</h3>
          <div>
            <ul>
              <li>
                <span>원산지</span>
                <span>{productItem.country}</span>
              </li>
              <li className="price">
                <span>판매가</span>
                <span>{productItem.price.toLocaleString()}원</span>
              </li>
              <li>
                <span>배송비</span>
                <span>3,000원 (30,000원 이상 구매시 무료)</span>
              </li>
            </ul>
          </div>
          <div className="packagingOptions">
            <span>포장 옵션</span>
            <div>
              <label>
                <input
                  name="option"
                  type="radio"
                  status="선물포장 없음"
                  pck="noPackaging"
                  onClick={addList}
                />
                선물포장 없음
              </label>
              <label>
                <input
                  name="option"
                  type="radio"
                  status="- 포장 있음(+3,000원)"
                  pck="packaging"
                  onClick={addList}
                />
                선물포장 있음(+ 3,000원)
              </label>
            </div>
          </div>
          {optionList.map((option, index) => {
            return (
              <Option
                key={index}
                name={option.name}
                price={option.price}
                status={option.status}
                pck={option.pck}
                total={total}
                setTotal={setTotal}
              />
            );
          })}
          <div className="totalProducts">
            <span>
              {/* TOTAL : {total.sumPrice.toLocaleString()}원({total.sumNum}개) */}
              TOTAL :
              {total.noPackaging.quantity * productItem.price +
                total.packaging.quantity * (productItem.price + 3000)}
              원(
              {total.sumNum}개)
            </span>
            <div>
              <button className="buyBtn" />
              <div>
                <button className="cartBtn" onClick={cartclick} />
                <button className="wishBtn" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductItemPage;
