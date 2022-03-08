export async function getProducts(query) {
  const response = await fetch(`http://10.58.2.143:8000/products${query}`);
  const body = await response.json();
  return body;
}
