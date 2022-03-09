// 상품 목록
export async function getProducts(query) {
  const response = await fetch(`http://10.58.2.143:8000/products${query}`);
  const body = await response.json();
  return body;
}

// 장바구니에 담긴 상품 목록
export async function getCartList() {
  const response = await fetch('http://10.58.4.85:8000/users/shoppingcart');
  // const response = await fetch('/data/cartdata.json');
  const body = await response.json();
  return body;
}

// 개별 상품 삭제
export async function deleteProduct(cart_id) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/${cart_id}`, {
    method: 'DELETE',
  });
}

// 선택 상품 삭제 : 스트링 전송 -> 해당하는 cart_id 여러개 삭제
export async function deleteCheckedItems(items) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/${items.join}`, {
    method: 'DELETE',
  });
}

// 장바구니 비우기
export async function deleteAllItems() {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart/0`, {
    method: 'DELETE',
  });
}

// 수량 변경
export async function updateQuantity(cart_id, quantity) {
  await fetch(`http://10.58.4.85:8000/users/shoppingcart`, {
    method: 'PATCH',
    body: {
      cart_id,
      quantity,
    },
  });
}
