const BASE_URL = 'http://10.58.0.144:8000';

function getToken() {
  return localStorage.getItem('token');
}

export async function getProducts(query) {
  const response = await fetch(`http://10.58.2.143:8000/products${query}`);
  if (!response.ok) {
    throw new Error('상품을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

// TODO) cart_info만 받고, user_info는 따로 받는다 -> getUserInfo 함수 필요
export async function getCartList() {
  const response = await fetch(`${BASE_URL}/users/shoppingcart`, {
    headers: {
      Authorization: getToken(),
    },
  });
  if (!response.ok) {
    throw new Error('장바구니 목록을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function updateQuantity(cart_id, quantity) {
  const response = await fetch(`${BASE_URL}/users/shoppingcart`, {
    method: 'PATCH',
    headers: {
      Authorization: getToken(),
    },
    body: JSON.stringify({
      cart_id,
      quantity,
    }),
  });
  if (!response.ok) {
    throw new Error('수량 변경을 실패했습니다');
  }
  const body = await getCartList();
  return body;
}

export async function deleteProduct(cart_id) {
  const response = await fetch(
    `${BASE_URL}/users/shoppingcart?cart_id=${cart_id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: getToken(),
      },
    }
  );
  if (!response.ok) {
    throw new Error('상품 삭제를 실패했습니다');
  }
  const body = await getCartList();
  return body;
}

// TODO) cart_id=1&cart_id=2 ... 형식으로 수정, 마지막은 &를 붙이지 않는다
export async function deleteCheckedItems(checkedItems) {
  const response = await fetch(
    `${BASE_URL}/users/shoppingcart?cart_id=${checkedItems}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: getToken(),
      },
    }
  );
  if (!response.ok) {
    throw new Error('상품 삭제를 실패했습니다');
  }
  const body = await getCartList();
  return body;
}

export async function deleteAllItems() {
  const response = await fetch(`${BASE_URL}/users/shoppingcart?cart_id=all`, {
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  });
  if (!response.ok) {
    throw new Error('상품 삭제를 실패했습니다');
  }
  const body = await getCartList();
  return body;
}
