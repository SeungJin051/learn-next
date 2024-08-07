import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ message, productInfo }) {
  const headerTitle = '상품 상세 정보 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage : {message}</div>
      <p>ProductInfo : {productInfo.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/100
  console.log(`## productId : `, context.params.productId);
  const id = context.params.productId;
  const res = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: {
      message: '서버에서 보내준 메세지',
      productInfo: res.data,
    },
  };
}
