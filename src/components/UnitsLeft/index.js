import React from 'react';
import styles from './style.module.css';

export default function UnitsLeft ({ variant }) {
  if (variant.product_id === 8242953650454) {
    return ;
  }

  if (variant.inventory_quantity === 0) {
    return <p>Sold Out!</p>
  }

  if (variant.inventory_quantity < 10) {
    return <p>Only {variant.inventory_quantity} units left!</p>
  }
  return (
    <p>Units Left: {variant.inventory_quantity}</p>
  );
};