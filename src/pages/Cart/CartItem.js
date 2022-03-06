import React from 'react';

// messge : cart_id가 없음 -> 장바구니가 비었습니다 조건부 렌더링
function CartItem({ item }) {
  const { name, price, thumbnail_image_url, quantity } = item;

  return (
    <tr className="cartItem">
      <td className="check">
        <input type="checkbox" />
      </td>
      <td className="thumb">
        <img alt="image" src={thumbnail_image_url} />
      </td>
      <td className="product">{name}</td>
      <td className="price">{price}원</td>
      <td className="quantity">
        <input type="number" value={quantity} />
        <button>변경</button>
      </td>
      <td className="mileage">415원</td>
      <td className="delivery">기본배송</td>
      <td className="charge">무료</td>
      <td className="total">무료</td>
      <td className="button">
        <button>주문하기</button>
        <button>삭제하기</button>
      </td>
    </tr>
  );
}

export default CartItem;
