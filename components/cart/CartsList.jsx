import Image from 'next/image';
import React from 'react';
import styles from './CartsList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

// map [1, 2, 3] -> [10, 20, 30] = 기존의 배열의 각각의 요소를 변화
// reduce [1, 2, 3] -> 6 = 모두 더해서 각각의 값으로 뽑아줌

export default function CartsList({ carts }) {
  const router = useRouter();
  const totalPrice = carts.reduce((acc, cur) => {
    //  누적 + 현재값
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async id => {
    // 1. 삭제 API 호출
    const { data } = await axios.post('http://localhost:3000/api/carts', {
      id: id,
    });
    console.log(data);
    alert(data);
    // 2. 상품 목록(배열) 갱신
    router.replace(router.asPath); // 이동은 하지만 흔적을 남기지 않겠다.
    // push -> 이동한다.
  };

  return (
    <div>
      <div>
        <ul>
          {carts &&
            carts.map(cart => {
              return (
                <li key={cart.id} className={styles.item}>
                  <div>
                    <Image
                      src={cart.imageUrl}
                      alt={cart.name}
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className={styles.description}>
                    <div>{cart.name}</div>
                    <div>{cart.price}</div>
                    {/* 함수의 참조를 넘긴다.(인자를 전달) */}
                    <button onClick={() => removeCart(cart.id)}>삭제</button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <p>총 가격 : {totalPrice}</p>
        <p>총 수량 : {carts.length}</p>
      </div>
    </div>
  );
}
