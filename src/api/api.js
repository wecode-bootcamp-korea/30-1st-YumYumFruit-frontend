const BASE_URL = 'http://10.58.0.144:8000';

// 상품 목록
export async function getProducts(query) {
  const response = await fetch(`${BASE_URL}/products${query}`);
  const body = await response.json();
  return body;
}
