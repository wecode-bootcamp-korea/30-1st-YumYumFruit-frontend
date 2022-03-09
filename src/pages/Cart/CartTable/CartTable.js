import React, { useState } from 'react';
import CartTableItem from 'pages/Cart/CartTableItem/CartTableItem';
import { TABLE_MENU_LIST } from './tablecolsdata';
import { deleteProduct, deleteAllItems, deleteCheckedItems } from 'api/api';
import './CartTable.scss';

function CartTable({ cartList, setCartList }) {
  // 체크 박스
  // TODO) 구현 어려운 것 : 모두 체크 해제 시, 전체박스의 checked를 false로 바꾼다
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isallChecked, setIsallChecked] = useState(false);

  const checkedItemsHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems => new Set(checkedItems));
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

  // 개별 상품 삭제
  const handleDelete = async id => {
    await deleteProduct(id);
    setCartList(prevItems => prevItems.filter(item => item.cart_id !== id));
  };

  // 전체 상품 삭제
  const handleDeleteAll = async () => {
    await deleteAllItems();
    setCartList([]);
  };

  // TODO) 전체주문 : cartList에 담긴 모든 cart_id / api 주소 및 method 협의
  // TODO) 선택주문 : checkedItems에 담긴 cart_id / api 주소 및 method 협의

  // TODO) totalPrice : packing 합계 + noPacking 합계
  // TODO) totalShippingFee : 배송비가 무료가 아닌 CartTableItem 개수 * 4000
  const packingSum = cartList.reduce((acc, el) => {
    const { price, quantity, packing_option } = el;
    if (packing_option === '선물포장 있음 (+3000)') {
      return acc + (price + 3000) * quantity;
    }
  }, 0);
  const noPackingSum = cartList.reduce((acc, el) => {
    const { price, quantity, packing_option } = el;
    if (packing_option === '선물포장 없음') {
      const sum = acc + (price + 3000) * quantity;
      console.log(acc);
      console.log(sum);
      return sum;
    }
  }, 0);
  const totalPrice = packingSum + noPackingSum;
  const totalShippingFee = 4000;

  return (
    <>
      <div className="cartTableTitle">일반상품 ({cartList.length})</div>
      <table className="cartTable">
        <thead>
          <tr>
            <th className="check">
              <input
                type="checkbox"
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
            <CartTableItem
              key={item.cart_id}
              item={item}
              isallChecked={isallChecked}
              checkedItemsHandler={checkedItemsHandler}
              handleDelete={handleDelete}
              setCartList={setCartList}
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
          <button onClick={handleDeleteAll}>장바구니 비우기</button>
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
