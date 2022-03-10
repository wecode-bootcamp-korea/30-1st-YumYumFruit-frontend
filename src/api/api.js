const BASE_URL = 'http://10.58.0.144:8000';

// 상품 목록
export async function getProducts(query) {
  const response = await fetch(`${BASE_URL}/products${query}`);
  const body = await response.json();
  return body;
}

// 장바구니에 담은 상품 목록
export async function getCartList() {
  const response = await fetch(`${BASE_URL}/users/shoppingcart`, {
    headers: {
      // Authorization: localStorage.getItem('token'),
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
  });
  const body = await response.json();
  return body;
}

// 수량 변경
export async function updateQuantity(cart_id, quantity) {
  await fetch(`${BASE_URL}/users/shoppingcart`, {
    method: 'PATCH',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      cart_id,
      quantity,
    }),
  });
}

// 개별 상품 삭제
export async function deleteProduct(cart_id) {
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=${cart_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
}

// 선택 상품 삭제 : 스트링 전송 -> 해당하는 cart_id 여러개 삭제
export async function deleteCheckedItems(checkedItems) {
  console.log(`fetch : ${checkedItems}`);
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=${checkedItems}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
}

// 장바구니 비우기
export async function deleteAllItems() {
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=0`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
}
