import React from 'react';
import CartItem from './CartItem';
import { GUIDE_LIST } from './guidedata';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <header className="titleArea">
          <h2 className="title">SHOPPING CART</h2>
        </header>
        <section className="cartArea">
          <div className="userInfoArea">
            <div className="member">
              <span>김혜진</span> 님은, <span>[일반회원]</span> 회원이십니다.
            </div>
            <ul className="mileage">
              <li className="item">가용적립금 : 1,000원</li>
              <li className="item">쿠폰 : 0개</li>
            </ul>
          </div>
          <div className="orderListArea">
            <div className="orderTitle">일반상품 (N)</div>
            <table className="orderTable">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="thumb">
                    이미지
                  </th>
                  <th scope="col" className="product">
                    상품정보
                  </th>
                  <th scope="col" className="price">
                    판매가
                  </th>
                  <th scope="col" className="quantity">
                    수량
                  </th>
                  <th scope="col" className="mileage">
                    적립금
                  </th>
                  <th scope="col" className="delivery">
                    배송구분
                  </th>
                  <th scope="col" className="charge">
                    배송비
                  </th>
                  <th scope="col" className="total">
                    합계
                  </th>
                  <th scope="col" className="button">
                    선택
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <CartItem />
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="10">
                    <div>
                      <span className="type">[기본배송]</span>
                    </div>
                    <div>
                      상품구매금액
                      <span className="price">` 24,600 `</span>` + 배송비 4,000
                      = 합계 : `<span className="totalPrice">28,600</span>원
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="priceGuide">
              할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다
            </div>
            <div className="selectMenu">
              <div>
                <span>선택상품을</span>
                <button>삭제하기</button>
                <button>해외배송 장바구니로 이동</button>
              </div>
              <div>
                <button>장바구니 비우기</button>
                <button>견적서 출력</button>
              </div>
            </div>
            <table className="totalTable">
              <thead>
                <tr>
                  <th scope="col">총 상품금액</th>
                  <th scope="col">총 배송비</th>
                  <th scope="col">총 결제예정금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td clasdsName="price">55,200원</td>
                  <td clasdsName="option">+0원</td>
                  <td clasdsName="total">=55,200원</td>
                </tr>
              </tbody>
            </table>
            <div clasName="orderBtnArea">
              <button className="totalBtn">전체상품주문</button>
              <button className="checkBtn">선택상품주문</button>
              <button className="goToMainBtn">쇼핑계속하기</button>
            </div>
            <div className="cartGuide">
              <h3 className="title">이용안내</h3>
              <div className="content">
                <h4 className="subTitle">장바구니 이용안내</h4>
                <ul>
                  {GUIDE_LIST.cartGuide.map(item => (
                    <li key={item.id}>{item.content}</li>
                  ))}
                </ul>
                <h4 className="subTitle">무이자할부 이용안내</h4>
                <ul>
                  {GUIDE_LIST.payingGuide.map(item => (
                    <li key={item.id}>{item.content}</li>
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
