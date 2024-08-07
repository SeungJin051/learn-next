import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';

export default function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.data);
    });

    // axios.get('http://localhost:4000/products').then(res => {
    //   setProducts(res.data);
    // });
  }, []);

  console.log(products);

  return (
    <ul>
      {products &&
        products.map(product => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <div>
                  {/* <img src="" alt="" /> */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={250}
                  ></Image>
                </div>
                <div>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
