import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Option from './Option';
import API from '../../config';
import './ProductItemPage.scss';

const ProductItemPage = () => {
  const [productItem, setProductItem] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [total, setTotal] = useState({
    false: {
      quantity: 0,
      option: 'False',
    },
    true: {
      quantity: 0,
      option: 'True',
    },
  });

  const params = useParams();
  const navigate = useNavigate();

  const handleLoad = () => {
    fetch(`${API.productDetail}/${params.id}`)
      .then(response => response.json())
      .then(data => setProductItem(data.data));
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
          packaged: e.target.getAttribute('packaged'),
        })
      );
      setTotal({
        ...total,
        [e.target.getAttribute('packaged')]: {
          quantity: total[e.target.getAttribute('packaged')].quantity + 1,
          option: e.target.getAttribute('packaged'),
        },
      });
    }
  };

  const goToPurchase = name => {
    navigate(name === 'buyBtn' ? '/' : '/users/shoppingcart');
  };

  //TODO) 수량이 0일 때, 보내지 않는 필터가 필요
  const postCartInfo = e => {
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: Number(params.id),
        packing_options: [
          {
            quantity: total.true.quantity,
            packing_option: total.true.option === '선물포장 ',
          },
          {
            quantity: total.false.quantity,
            packing_option: Boolean(total.false.option),
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('장바구니에 담겼어요!');
          handleLoad();
        } else {
          alert('다시 시도해주세요!');
        }
      });

    goToPurchase(e.target.className);
  };

  // total.true.option / total.false.option -> true, false
  const postBuyNowInfo = e => {
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: productItem.id,
        packing_options: [
          {
            quantity: total.true.quantity,
            packing_option: true,
          },
          {
            quantity: total.false.quantity,
            packing_option: false,
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json === true) {
          alert('바로구매로 이동합니다!');
        } else {
          alert('다시 시도해주세요!');
        }
      });

    goToPurchase(e.target.className);
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
                  packaged="false"
                  onClick={addList}
                />
                선물포장 없음
              </label>
              <label>
                <input
                  name="option"
                  type="radio"
                  status="- 포장 있음(+3,000원)"
                  packaged="true"
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
                packaged={option.packaged}
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
                total.false.quantity * productItem.price +
                total.true.quantity * (productItem.price + 3000)
              ).toLocaleString()}
              원(
              {total.false.quantity + total.true.quantity}개)
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
