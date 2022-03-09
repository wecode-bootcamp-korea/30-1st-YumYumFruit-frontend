const BASE_URL = 'http://10.58.6.197:8000';

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
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
  });
  // const response = await fetch('/data/cartdata.json');
  const body = await response.json();
  return body;
}

// 수량 변경
export async function updateQuantity(cart_id, quantity) {
  await fetch(`${BASE_URL}/users/shoppingcart`, {
    method: 'PATCH',
    headers: {
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
    body: {
      cart_id,
      quantity,
    },
  });
}

// 개별 상품 삭제
export async function deleteProduct(cart_id) {
  await fetch(`${BASE_URL}/users/shoppingcart/${cart_id}`, {
    method: 'DELETE',
    headers: {
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
  });
}

// 선택 상품 삭제 : 스트링 전송 -> 해당하는 cart_id 여러개 삭제
export async function deleteCheckedItems(items) {
  const array = [...items];
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=${array.join()}`, {
    method: 'DELETE',
    headers: {
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
  });
}

// 장바구니 비우기
export async function deleteAllItems() {
  await fetch(`${BASE_URL}/users/shoppingcart/0`, {
    method: 'DELETE',
    headers: {
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0Njk3Nzg5NH0.x1wMu386hjwvkFgzuNVjolDHcyE-1bwOVIvU_3Iihlc',
    },
  });
}
