import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, onBuyNow, onPreview }) {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onBuyNow={onBuyNow}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}
