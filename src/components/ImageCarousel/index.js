import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import notFound from '@/images/image-not-found.jpeg';

export default function ImageCarousel ({ images }) {
  if (images.length === 0) {
    return <Image
      src={notFound}
      alt={'image not found'}
      width="100"
      height="100"
      className={styles.image}
    />;
  }

  return (
    <div>
      {images.map(img =>
        <Image
          key={img.id}
          src={img?.src || notFound}
          alt={img?.alt || 'image not found'}
          width="100"
          height="100"
          className={styles.image}
        />
      )}
    </div>
  );
};