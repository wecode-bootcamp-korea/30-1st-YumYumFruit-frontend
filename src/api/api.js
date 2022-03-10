const BASE_URL = 'http://10.58.0.144:8000';

function getToken() {
  return localStorage.getItem('token');
}

export async function getProducts(query) {
  const response = await fetch(`${BASE_URL}/products${query}`);
  const body = await response.json();
  return body;
}

export async function getCartList() {
  const response = await fetch(`${BASE_URL}/users/shoppingcart`, {
    headers: {
      Authorization: getToken(),
    },
  });
  const body = await response.json();
  return body;
}

export async function updateQuantity(cart_id, quantity) {
  await fetch(`${BASE_URL}/users/shoppingcart`, {
    method: 'PATCH',
    headers: {
      Authorization: getToken(),
    },
    body: JSON.stringify({
      cart_id,
      quantity,
    }),
  });
}

export async function deleteProduct(cart_id) {
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=${cart_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  });
}

export async function deleteCheckedItems(checkedItems) {
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=${checkedItems}`, {
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  });
}

export async function deleteAllItems() {
  await fetch(`${BASE_URL}/users/shoppingcart?cart_id=0`, {
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  });
}
