import React from 'react';
import './ProductItem.scss';

const ProductItem = () => {
  return (
    <div className="layout">
      <main>
        <div className="itemImage">
          <img src="https://user-images.githubusercontent.com/87808288/156104521-3d17cb30-67a0-477d-bcdc-5ad280e6ee40.png" />
        </div>
        <div className="infoArea">
          <h3>마시는 마말랭 땡귤</h3>
          <div>
            <ul>
              <li>원산지</li>
              <li>판매가</li>
              <li>배송비</li>
            </ul>
            <ul>
              <li>국내</li>
              <li>5,000원</li>
              <li>4,000원 (30,000원 이상 구매시 무료)</li>
            </ul>
          </div>
          <div className="packagingOptions">
            <span>포장 옵션</span>
            <div>
              <label>
                <input type="radio" name="packaging"></input>
                선물포장 없음
              </label>
              <label>
                <input type="radio" name="packaging"></input>
                선물포장 있음(+ 3,000원)
              </label>
            </div>
          </div>

          <div className="totalProducts">
            <span>TOTAL : 0(0개)</span>
            <form>
              <button className="buyBtn" type="button"></button>
              <div>
                <button className="cartBtn" type="button"></button>
                <button className="wishBtn" type="button"></button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <article></article>
      <div className="review"></div>
      <div className="qAndI"></div>
      <div className="qAndI"></div>
    </div>
  );
};

export default ProductItem;
