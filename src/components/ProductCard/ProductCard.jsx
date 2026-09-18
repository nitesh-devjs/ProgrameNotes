import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download, FileText, Eye } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import styles from './ProductCard.module.css';

const CATEGORY_COLORS = {
  programming: { bg: 'rgba(124,58,237,0.12)', text: '#9F67FF', label: 'Programming' },
  science:     { bg: 'rgba(6,182,212,0.1)',   text: '#06B6D4', label: 'Science'      },
  math:        { bg: 'rgba(245,158,11,0.1)',  text: '#F59E0B', label: 'Math'         },
  commerce:    { bg: 'rgba(16,185,129,0.1)',  text: '#10B981', label: 'Commerce'     },
};

export default function ProductCard({ product, onBuyNow, onPreview }) {
  const { format, formatOriginal } = useCurrency();
  const cat = CATEGORY_COLORS[product.category] || CATEGORY_COLORS.programming;
  const originalPrice = formatOriginal(product);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className={styles.card}>
      {/* Thumbnail */}
      <div className={styles.thumb}>
        <img src={product.thumbnail} alt={product.title} loading="lazy" className={styles.img} />
        <div className={styles.thumbOverlay} />
        {discount && <div className={styles.badge}>-{discount}%</div>}
        <div className={styles.catPill} style={{ background: cat.bg, color: cat.text }}>
          {cat.label}
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Tags */}
        {product.features?.length > 0 && (
          <div className={styles.tags}>
            {product.features.slice(0, 3).map(f => (
              <span key={f} className={styles.tag}>{f}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.desc}>{product.description}</p>

        {/* Meta */}
        <div className={styles.meta}>
          <span className={styles.rating}>
            <Star size={13} fill="currentColor" /> {product.rating}
            <span className={styles.reviews}>({product.reviews})</span>
          </span>
          <span className={styles.metaDot} />
          <span className={styles.metaInfo}><FileText size={13} /> {product.lineCount}</span>
          <span className={styles.metaDot} />
          <span className={styles.metaInfo}><Download size={13} /> {product.sales}+</span>
        </div>

        {/* Footer */}
        <div className={styles.cardFooter}>
          <div className={styles.prices}>
            <span className={styles.price}>{format(product)}</span>
            {originalPrice && <span className={styles.originalPrice}>{originalPrice}</span>}
          </div>
          <div className={styles.cardBtns}>
            {onPreview && (
              <button className={styles.previewBtn} onClick={() => onPreview(product)} title="Preview">
                <Eye size={15} />
              </button>
            )}
            <button className={styles.buyBtn} onClick={() => onBuyNow(product)}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
