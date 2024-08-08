import Image from 'next/image';
import React from 'react';
import styles from './CartsList.module.css';

export default function CartsList({ carts }) {
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
        <p>총 가격 :</p>
        <p>총 수량 :</p>
      </div>
    </div>
  );
}
