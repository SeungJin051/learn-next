import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
  return instance.get('/products');
}

// 상품 상세 정보를 조회하는 API 함수
function fetchProductInfo(id) {
  return instance.get(`/products/${id}`);
}

// 장바구니에 아이템을 추가하는 API함수
function createCartItem(id, name, price, imageUrl) {
  return instance.post('/carts', {
    id: id,
    name,
    price,
    imageUrl,
  });
}

// 장바구니 목록을 조회하는 API 함수
function fetchCartItems() {
  return instance.get('/carts');
}

export {
  instance,
  fetchProducts,
  fetchProductInfo,
  createCartItem,
  fetchCartItems,
};
