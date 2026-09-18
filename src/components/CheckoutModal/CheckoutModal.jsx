import React, { useEffect } from 'react';
import { X, Download, Star, CheckCircle, List } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import styles from './CheckoutModal.module.css';

export default function CheckoutModal({ product, onClose }) {
  const { format, formatOriginal } = useCurrency();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!product) return null;
  const originalPrice = formatOriginal(product);

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.modal}>
        {/* Close */}
        <button className={styles.close} onClick={onClose} aria-label="Close"><X size={18} /></button>

        <div className={styles.inner}>
          {/* Left — Product Info */}
          <div className={styles.left}>
            <div className={styles.thumb}>
              <img src={product.thumbnail} alt={product.title} className={styles.thumbImg} />
            </div>

            <div className={styles.info}>
              <p className={styles.subcat}>{product.subcategory} · {product.extension}</p>
              <h2 className={styles.title}>{product.title}</h2>

              <div className={styles.rating}>
                <Star size={14} fill="currentColor" className={styles.star} />
                <span>{product.rating}</span>
                <span className={styles.reviewCount}>({product.reviews} reviews)</span>
              </div>

              <div className={styles.prices}>
                <span className={styles.price}>{format(product)}</span>
                {originalPrice && <span className={styles.original}>{originalPrice}</span>}
              </div>

              {/* What's Included */}
              {product.included?.length > 0 && (
                <div className={styles.included}>
                  <p className={styles.includedHead}>What's included</p>
                  <ul className={styles.includedList}>
                    {product.included.map(item => (
                      <li key={item} className={styles.includedItem}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right — Payment */}
          <div className={styles.right}>
            <h3 className={styles.payHead}>Complete Your Purchase</h3>
            <p className={styles.payDesc}>Instant delivery — download link sent to your email right after payment.</p>

            {/* UPI Section */}
            <div className={styles.upiBox}>
              <div className={styles.upiQr}>
                <div className={styles.qrPlaceholder}>
                  <span className={styles.qrIcon}>📱</span>
                  <span className={styles.qrText}>UPI QR Code</span>
                </div>
              </div>
              <div className={styles.upiInfo}>
                <p className={styles.upiLabel}>Pay via UPI</p>
                <p className={styles.upiId}>@programenote</p>
                <p className={styles.upiNote}>After payment, WhatsApp your transaction ID to get instant download access.</p>
              </div>
            </div>

            {/* Or Divider */}
            <div className={styles.divider}><span>or pay online</span></div>

            {/* Card Payment Placeholder */}
            <button className={styles.cardBtn}>
              <Download size={16} />
              Pay {format(product)} — Get Instant Access
            </button>

            <p className={styles.secure}>🔒 Secure payment · Instant download · No hidden charges</p>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/919876543210?text=Hi! I want to buy: ${encodeURIComponent(product.title)}. Transaction ID: `}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <span>💬</span> Send Payment Screenshot on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
