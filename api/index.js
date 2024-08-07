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

export { instance, fetchProducts, fetchProductInfo };
