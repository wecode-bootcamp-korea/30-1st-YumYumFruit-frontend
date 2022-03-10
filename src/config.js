const BASE_URL = 'http://10.58.0.144:8000';

export const API = {
  signIn: `${BASE_URL}/users/signin`,
  signUp: `${BASE_URL}/users/signup`,
  productList: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products`,
  cart: `${BASE_URL}/users/shoppingcart`,
  wishList: `${BASE_URL}/users/wishlist`,
};

export default API;
