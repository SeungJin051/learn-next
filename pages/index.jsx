import ProductList from '@/components/ProductList';

function ProductPage() {
  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ProductList />
    </div>
  );
}

/**
 *  1. 상품 목록 - /
 *  2. 상품 상세 - /products/productId/1
 *  3. 장바구니 - /carts
 */

export default ProductPage;
