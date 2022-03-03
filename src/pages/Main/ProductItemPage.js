import React, { useEffect, useState } from 'react';
import './ProductItemPage.scss';

const ProductItemPage = () => {
  // const [count, setCount] = useState(1);
  // const [show] = useState(false);
  const [productItemPages, setProductItemPages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductItemPages.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setProductItemPages(data));
  }, []);

  if (!productItemPages.length) {
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
          <h3>{productItemPages[0].name}</h3>
          <div>
            <ul>
              <li>
                <span>원산지</span>
                <span>{productItemPages[0].country}</span>
              </li>
              <li className="price">
                <span>판매가</span>
                <span>{productItemPages[0].price.toLocaleString()}원</span>
              </li>
              <li>
                <span>배송비</span>
                <span>4,000원 (30,000원 이상 구매시 무료)</span>
              </li>
            </ul>
          </div>
          <div className="packagingOptions">
            <span>포장 옵션</span>
            <div>
              <label>
                <input type="radio" name="packaging" />
                선물포장 없음
              </label>
              <label>
                <input type="radio" name="packaging" />
                선물포장 있음(+ 3,000원)
              </label>
            </div>
          </div>
          <div className="productCount">
            <div className="productInfo">
              <span>제품 이름</span>
              <span>- 포장 없음</span>
            </div>
            <span>1</span>
            <div className="amountSelect">
              <div>
                <button className="btnMinus">-</button>
                <button className="btnPlus">+</button>
              </div>
              <button className="btnPlus">x</button>
            </div>
          </div>
          <div className="productCount">
            <div className="productInfo">
              <span>제품 이름</span>
              <span>- 포장 있음(+3,000원)</span>
            </div>
            <span>1</span>
            <div className="amountSelect">
              <div>
                <button className="btnMinus">-</button>
                <button className="btnPlus">+</button>
              </div>
              <button className="btnDelete">x</button>
            </div>
          </div>
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
