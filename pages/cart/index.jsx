import { fetchCartItems } from '@/api';
import React from 'react';

export default function CartPage(carts) {
  console.log(carts);
  return <div>장바구니 페이지</div>;
}

export async function getServerSideProps() {
  const { data } = await fetchCartItems();
  return {
    props: {
      carts: data,
    },
  };
}
