import Image from 'next/image';
import React from 'react';
import styles from './CartsList.module.css';

// map [1, 2, 3] -> [10, 20, 30] = 기존의 배열의 각각의 요소를 변화
// reduce [1, 2, 3] -> 6 = 모두 더해서 각각의 값으로 뽑아줌

export default function CartsList({ carts }) {
  const totalPrice = carts.reduce((acc, cur) => {
    //  누적 + 현재값
    return acc + parseFloat(cur.price);
  }, 0);

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
