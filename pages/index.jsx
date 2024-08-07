import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';

function ProductPage() {
  const headerTitle = '상품 목록 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle} />
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
