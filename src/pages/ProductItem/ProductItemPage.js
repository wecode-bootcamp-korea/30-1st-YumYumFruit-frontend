import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Option from './Option';
import { config } from '../../config';
import './ProductItemPage.scss';
// import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';

const ProductItemPage = () => {
  const [productItem, setProductItem] = useState([]); //상세페이지 아이템
  const [optionList, setOptionList] = useState([]); //packaging option
  const [total, setTotal] = useState({
    noPackaging: {
      quantity: 0,
      option: 'noPackaging',
    },
    packaging: {
      quantity: 0,
      option: 'packaging',
    },
  });

  const test = 7;

  // TODO: back-end와 통신준비중
  // const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${config.productList}/${params.id}`)
  //     .then(response => response.json())
  //     .then(data => setProductItem(data.data));
  // }, []);

  useEffect(() => {
    // fetch('http://10.58.6.197:8000/products/7')
    // fetch(`${config.productList}/7`)
    fetch(`${config.productList}/${test}`)
      .then(response => response.json())
      .then(data => setProductItem(data.data));
  }, []);

  // mockData 연결용 useEffect
  // useEffect(() => {
  //   fetch('http://localhost:3001/data/ProductItemPages.json')
  //     .then(response => response.json())
  //     .then(data => setProductItem(data));
  // }, []

  const addList = e => {
    if (
      optionList.length === 0 ||
      (optionList.length < 2 &&
        optionList[0].status !== e.target.getAttribute('status'))
    ) {
      setOptionList(
        optionList.concat({
          name: productItem.name,
          price: productItem.price,
          status: e.target.getAttribute('status'),
          pck: e.target.getAttribute('pck'),
        })
      );
      setTotal({
        ...total,
        [e.target.getAttribute('pck')]: {
          quantity: total[e.target.getAttribute('pck')].quantity + 1,
          option: e.target.getAttribute('pck'),
        },
      });
    }
  };

  const postCartInfo = () => {
    fetch(`${config.cart}`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
      },
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

    const goToCart = () => {
      navigate('/');
    };
    goToCart();
  };

  const postBuyNowInfo = () => {
    fetch('http://10.58.1.244:8000/users/shoppingcart', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
      },
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
      .then(alert('바로 구매로 이동합니다.'));

    const goToCart = () => {
      navigate('/');
    };
    goToCart();
  };

  if (!productItem.name) {
    return null;
  }

  return (
    <div className="itemPageLayout">
      <main>
        <div className="itemImage">
          <img src={productItem.images[0]} alt="main 사진입니다" />
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
                <span>{Math.floor(productItem.price).toLocaleString()}원</span>
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
                optionList={optionList}
                setOptionList={setOptionList}
              />
            );
          })}
          <div className="totalProducts">
            <span>
              {(
                total.noPackaging.quantity * productItem.price +
                total.packaging.quantity * (productItem.price + 3000)
              ).toLocaleString()}
              원(
              {total.noPackaging.quantity + total.packaging.quantity}개)
            </span>
            <div>
              <button className="buyBtn" onClick={postBuyNowInfo} />
              <div>
                <button className="cartBtn" onClick={postCartInfo} />
                <button className="wishBtn" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <article>
        <img src={productItem.images[1]} alt="테스트를 위한 사진입니다" />
      </article>
    </div>
  );
};

export default ProductItemPage;
