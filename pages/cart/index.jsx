import { fetchCartItems } from '@/api';
import CartsHeader from '@/components/cart/CartsHeader';
import CartsList from '@/components/cart/CartsList';
import React from 'react';

export default function CartPage(carts) {
  console.log(carts);
  return (
    <div>
      <CartsHeader />
      <CartsList />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await fetchCartItems();
  return {
    props: {
      carts: data,
    },
  };
}
