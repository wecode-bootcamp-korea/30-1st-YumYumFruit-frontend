import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckBox from 'pages/Cart/CheckBox/CheckBox';
import './CartItem.scss';

function CartItem({ item, isallChecked, checkedItemsHandler }) {
  const { cart_id, name, price, thumbnail_image_url, quantity, option } = item;
  const [quantityNum, setQuantityNum] = useState(quantity);
  const priceSum = price * quantityNum;
  const navigate = useNavigate();

  // 수량 인풋 핸들러
  const handleQuantityInput = e => {
    setQuantityNum(Number(e.target.value)); // value는 string
  };

  // 변경버튼 onClick : quantity 수정하는 PATCH 함수 넣기
  // 옵션 있을 경우, +3000원 백? 프? 어디서 처리할지 논의하기
  const updateQuantity = () => {};

  // 삭제버튼 onClick : 현재 cart_id 삭제
  const deleteItem = () => {
    fetch(`http://10.58.1.244:8000/users/shoppingcart/${cart_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // 주문하기 : 해당 cart_id를 서버에 보낸다? 논의 필요
  const goToOrderForm = () => {
    navigate('/order/orderform');
  };

  // 조건부 렌더링 필요 : messge = cart_id가 없음 -> 장바구니가 비었습니다
  return (
    <tr className="cartItem">
      <td className="check">
        <CheckBox
          id={cart_id}
          isallChecked={isallChecked}
          onChange={checkedItemsHandler}
        />
      </td>
      <td className="thumb">
        <img alt="img" src={thumbnail_image_url} className="thumbImage" />
      </td>
      <td className="product">
        <p className="name">{name}</p>
        <p className="option">{option}</p>
      </td>
      <td className="price">{price.toLocaleString()}원</td>
      <td className="quantity">
        <input
          type="number"
          min="0"
          value={quantityNum}
          onChange={handleQuantityInput}
          className="numberInput"
        />
        <button className="numberBtn" onClick={updateQuantity}>
          변경
        </button>
      </td>
      <td className="mileage">
        {(price * quantityNum * 0.05).toLocaleString()}원
      </td>
      <td className="delivery">기본배송</td>
      <td className="charge">무료</td>
      <td className="total">{priceSum.toLocaleString()}원</td>
      <td className="button">
        <button
          to="order/orderform"
          className="orderBtn"
          onClick={goToOrderForm}
        >
          주문하기
        </button>
        <button className="deleteBtn" onClick={deleteItem}>
          삭제하기
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
