export async function getProducts(query) {
  const response = await fetch(`http://10.58.2.143:8000/products${query}`);
  const body = await response.json();
  return body;
}

export async function deleteProduct(cart_id) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/${cart_id}`, {
    method: 'DELETE',
  });
}

// 선택 상품 삭제 : 스트링 전송 -> 해당하는 cart_id 삭제
export async function deleteCheckedItems(items) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/${items.join}`, {
    method: 'DELETE',
  });
}

// 장바구니 비우기 : token 값 전송
export async function deleteAllItems() {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/0`, {
    method: 'DELETE',
  });
}

// 변경버튼 onClick : quantity 수정하는 PATCH 함수 넣기
// 수정 후, cartList를 다시 받아야 하나? setCartList(data.cart_info);
// 옵션 있을 경우, +3000원 백? 프? 어디서 처리할지 논의하기
// PATCH, cart_id, quantity

export async function updateQuantity(cart_id, quantity) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart`, {
    method: 'PATCH',
    body: {
      cart_id,
      quantity,
    },
  });
}
