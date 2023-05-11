import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import notFound from '@/images/image-not-found.jpeg';
import Link from 'next/link';

export default function ProductCard ({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={styles.productCard}
    >
      <Image
        src={product.mainImage?.src || notFound}
        alt={product.mainImage?.alt || 'image not found'}
        width={product.mainImage?.width || 1080}
        height={product.mainImage?.height || 1080}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <h3>{product.title}</h3>
        <p>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(product.minPrice)}</p>
      </div>
    </Link>
  );
};