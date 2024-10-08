import Image from 'next/image';
import React from 'react';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter(); // useRouter를 이용한 2.
  const { id, name, price, imageUrl } = productDetail; // 디스트럭처링
  const addCart = async () => {
    // 1. 장바구니에 담는 API 호출
    const res = await createCartItem(id, name, price, imageUrl);
    console.log(res);
    alert('장바구니에 추가됨!');
    // 2. 장바구니 페이지로 이동
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div>
        {/* <img src={imageUrl} alt="" /> */}
        <Image src={imageUrl} alt={name} width={250} height={250} />
      </div>
      <div className={styles.description}>
        <p>{name}</p>
        <p>{price}$</p>
        <button onClick={addCart}>장바구니에 담기</button>
      </div>
    </div>
  );
}
