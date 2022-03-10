import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckBox from 'pages/Cart/CheckBox/CheckBox';
import { updateQuantity } from 'api/api';
import './CartTableItem.scss';

function CartTableItem({
  item,
  totalPrice,
  isallChecked,
  checkedItemsHandler,
  handleDelete,
  setCartList,
  isLoading,
}) {
  const {
    cart_id,
    name,
    price,
    thumbnail_image_url,
    quantity,
    packing_option,
  } = item;
  const [quantityNum, setQuantityNum] = useState(quantity);
  const navigate = useNavigate();

  const handleQuantityInput = e => {
    setQuantityNum(Number(e.target.value));
  };

  const handleUpdateQty = async (cart_id, quantity) => {
    const { cart_info } = await updateQuantity(cart_id, quantity);
    setCartList(cart_info);
  };

  // TODO) 주문하기 : 서버에 보낼 url, body 논의 필요
  const goToOrderForm = () => {
    navigate('/users/order');
  };

  const priceSum = packing_option
    ? (price + 3000) * quantity
    : price * quantity;

  return (
    <tr className="cartTableItem">
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
        <p className="packing_option">
          {packing_option ? '선물포장 있음 (+3000)' : '선물포장 없음'}
        </p>
      </td>
      <td className="price">
        {(packing_option ? price + 3000 : price).toLocaleString()}원
      </td>
      <td className="quantity">
        <input
          type="number"
          min="0"
          value={quantityNum}
          className="numberInput"
          onChange={handleQuantityInput}
        />
        <button
          className="numberBtn"
          disabled={isLoading}
          onClick={() => handleUpdateQty(cart_id, quantityNum)}
        >
          변경
        </button>
      </td>
      <td className="mileage">{(priceSum * 0.05).toLocaleString()}원</td>
      <td className="delivery">기본배송</td>
      <td className="charge">
        {totalPrice >= 30000 ? '0 (무료)' : '4,000 (조건)'}
      </td>
      <td className="total">{priceSum.toLocaleString()}원</td>
      <td className="button">
        <button
          to="/users/order"
          className="orderBtn"
          disabled={isLoading}
          onClick={goToOrderForm}
        >
          주문하기
        </button>
        <button
          className="deleteBtn"
          disabled={isLoading}
          onClick={() => handleDelete(cart_id)}
        >
          삭제하기
        </button>
      </td>
    </tr>
  );
}

export default CartTableItem;
