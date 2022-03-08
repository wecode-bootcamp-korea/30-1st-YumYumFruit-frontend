import React, { useState, useRef } from 'react';
import CartItem from 'pages/Cart/CartItem/CartItem';
import { TABLE_MENU_LIST } from './tablecolsdata';
import './CartTable.scss';

function CartTable({ cartList }) {
  const ref = useRef();
  // totalPrice : cartItem의 price * quantity 전체합 (서버에서 실시간 데이터 불러옴)
  // totalShippingFee : 배송비가 무료가 아닌 cartItem 개수 * 4000
  const totalPrice = 0;
  const totalShippingFee = 4000;

  // 체크 박스
  // 구현 어려운 것 : 모두 체크 해제 시, 전체박스의 checked를 false로 바꾼다
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isallChecked, setIsallChecked] = useState(false);

  const checkedItemsHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
    } else if (!isChecked && checkedItems.size === 0) {
      ref.current.checked = false;
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(cartList.map(item => item.cart_id)));
      setIsallChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setIsallChecked(false);
    }
  };

  // 선택 상품 삭제 : 1,4,7 스트링 전송 -> 해당하는 cart_id 삭제
  const deleteCheckedItems = items => {
    fetch(`http://10.58.1.244:8000/users/shoppingcart/${items.join}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // 장바구니 비우기 : token 값 전송
  const deleteAllItems = () => {
    fetch(`http://10.58.1.244:8000/users/shoppingcart`, {
      method: 'PUT',
      headers: {
        Authorization: 'tokenSample',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // 전체주문 : cartList에 담긴 모든 cart_id / api 주소? method?
  // 선택주문 : checkedItems에 담긴 cart_id / api 주소? method?

  return (
    <>
      <div className="cartTableTitle">일반상품 ({cartList.length})</div>
      <table className="cartTable">
        <thead>
          <tr>
            <th className="check">
              <input
                type="checkbox"
                ref={ref}
                onChange={e => allCheckedHandler(e.target.checked)}
              />
            </th>
            {TABLE_MENU_LIST.map(menu => (
              <th key={menu.id} scope="col" className={menu.className}>
                {menu.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartList.map(item => (
            <CartItem
              key={item.cart_id}
              item={item}
              isallChecked={isallChecked}
              checkedItemsHandler={checkedItemsHandler}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="10" className="cartTableBottom">
              <div className="wrapper">
                <p className="type">[기본배송]</p>
                <p className="totalPriceArea">
                  상품구매금액
                  <span className="price"> {totalPrice.toLocaleString()} </span>
                  + 배송비
                  <span className="shippingFee">
                    {' '}
                    {totalShippingFee === 0
                      ? '0 (무료)'
                      : totalShippingFee.toLocaleString()}{' '}
                  </span>
                  = 합계 :
                  <span className="totalPrice">
                    {(totalPrice + totalShippingFee).toLocaleString()}
                    <span className="won">원</span>
                  </span>
                </p>
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
          <button onClick={() => deleteCheckedItems(checkedItems)}>
            삭제하기
          </button>
        </div>
        <div>
          <button onClick={deleteAllItems}>장바구니 비우기</button>
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
            <td>
              <span className="num">{totalPrice.toLocaleString()}</span>원
            </td>
            <td>
              <span className="num">+{totalShippingFee.toLocaleString()}</span>
              원
            </td>
            <td className="total">
              <span className="num">
                ={(totalPrice + totalShippingFee).toLocaleString()}
              </span>
              원
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CartTable;
