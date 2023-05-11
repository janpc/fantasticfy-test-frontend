import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import notFound from '@/images/image-not-found.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ImageCarousel ({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    dotsClass: "slick-dots slick-thumb",
    className:styles.carousel
  };

  if (images.length === 0) {
    return <Image
      src={notFound}
      alt={'image not found'}
      width="1080"
      height="1080"
      className={styles.image}
    />;
  }
  if (images.length === 1) {
    return <Image
      src={images[0]?.src || notFound}
      alt={images[0]?.alt || 'image not found'}
      width={images[0]?.width || 1080}
      height={images[0]?.height || 1080}
      className={styles.image}
    />;
  }

  return (
    <Slider {...settings}>
      {images.map(img =>
        <Image
          key={img.id}
          src={img?.src || notFound}
          alt={img?.alt || 'image not found'}
          width={img?.width || 1080}
          height={img?.height || 1080}
          className={styles.image}
        />
      )}
    </Slider>
  );
};