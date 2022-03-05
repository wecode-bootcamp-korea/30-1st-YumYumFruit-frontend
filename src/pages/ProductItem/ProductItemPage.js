import React, { useEffect, useState } from 'react';
import Option from './Option';
import './ProductItemPage.scss';

const ProductItemPage = () => {
  const [optionFalse, setOptionFalse] = useState({ count: 1, price: 10000 });
  const [productItem, setProductItem] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [option, setOption] = useState({});

  const increase = () => {
    setOptionFalse({
      ...optionFalse,
      count: optionFalse.count + 1,
      price: optionFalse.price + 10000,
    });
  };

  const decrease = () => {
    if (optionFalse.count > 1) {
      setOptionFalse({
        ...optionFalse,
        count: optionFalse.count - 1,
        price: optionFalse.price - 10000,
      });
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductItemPages.json')
      .then(response => response.json())
      .then(data => setProductItem(data));
  }, []);

  const addList = e => {
    if (optionList.length === 0) {
      setOptionList(
        optionList.concat({
          productName: productItem.name,
          extraPrice: e.target.getAttribute('status'),
        })
      );
    } else if (
      optionList.length < 2 &&
      optionList[0].extraPrice !== e.target.getAttribute('status')
    ) {
      setOptionList(
        optionList.concat({
          productName: productItem.name,
          extraPrice: e.target.getAttribute('status'),
        })
      );
    }
  };
  console.log(optionList);

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
                  type="radio"
                  status="선물포장 없음"
                  name="packaging"
                  onClick={addList}
                />
                선물포장 없음
              </label>
              <label>
                <input
                  type="radio"
                  status="- 포장 있음(+3,000원)"
                  name="packaging"
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
                name={option.productName}
                extraPrice={option.extraPrice}
              />
            );
          })}
          <div className="totalProducts">
            <span>TOTAL : 0(0개)</span>
            <div>
              <button className="buyBtn" />
              <div>
                <button className="cartBtn" />
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
