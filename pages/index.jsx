import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/products"').then(res => {
      res.data;
    });
  });
  return <div style={{ color: 'blue' }}>Hello Next</div>;
}
/**
 *  1. 상품 목록 - /
 *  2. 상품 상세 - /products/productId/1
 *  3. 장바구니 - /carts
 */
export default ProductPage;
