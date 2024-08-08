import { fetchProductInfo } from '@/api';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ productDetail }) {
  const headerTitle = '상품 상세 정보 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfo productDetail={productDetail} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/100
  console.log(`## productId : `, context.params.productId);
  const id = context.params.productId;
  const { data } = await fetchProductInfo(id);

  // const res = await axios.get(`http://localhost:4000/products/${id}`);
  return {
    props: {
      productDetail: data,
    },
  };
}
