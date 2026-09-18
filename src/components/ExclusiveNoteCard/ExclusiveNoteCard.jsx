import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import styles from './ExclusiveNoteCard.module.css';

export default function ExclusiveNoteCard({ product }) {
  const { format, formatOriginal } = useCurrency();

  if (!product) return null;
  
  const originalPriceStr = formatOriginal(product);

  return (
    <Link to={`/store/${product.id}`} className={styles.exclusiveCard}>
      <div className={styles.imageSection}>
        <img src={product.thumbnail} alt={product.title} className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.contentSection}>
        <span className={styles.badge}>Exclusive Resource</span>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{format(product)}</span>
            {originalPriceStr && (
              <span className={styles.originalPrice}>{originalPriceStr}</span>
            )}
          </div>
          <div className={styles.buyBtn}>
            Get Now <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
