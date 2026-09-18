import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Star, ShoppingBag, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { format, formatOriginal } = useCurrency();
  const [product, setProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const p = PRODUCTS.find(x => x.id === id);
    if (p) setProduct(p);
  }, [id]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  const originalPrice = formatOriginal(product);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;
    
  const images = [product.thumbnail, ...(product.previewImages || [])];

  return (
    <div className={styles.page}>
      <div className="container">
        
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link to="/store" className={styles.backLink}><ArrowLeft size={16} /> Back to Store</Link>
          <span className={styles.slash}>/</span>
          <span className={styles.bcCat}>{product.category}</span>
          <span className={styles.slash}>/</span>
          <span className={styles.bcTitle}>{product.title}</span>
        </div>

        <div className={styles.mainGrid}>
          {/* Left: Gallery */}
          <div className={styles.gallery}>
            <ScrollReveal>
              <div className={styles.mainImgBox}>
                <img src={images[activeImg]} alt={product.title} className={styles.mainImg} />
                {discount && <div className={styles.badge}>-{discount}%</div>}
              </div>
            </ScrollReveal>
            
            {images.length > 1 && (
              <ScrollReveal delay={0.1}>
                <div className={styles.thumbs}>
                  {images.map((src, i) => (
                    <button 
                      key={i} 
                      className={`${styles.thumbBtn} ${i === activeImg ? styles.activeThumb : ''}`}
                      onClick={() => setActiveImg(i)}
                    >
                      <img src={src} alt="Preview" className={styles.thumbImg} />
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right: Info */}
          <div className={styles.info}>
            <ScrollReveal direction="left">
              <h1 className={styles.title}>{product.title}</h1>
              
              <div className={styles.meta}>
                <div className={styles.rating}>
                  <Star size={16} fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className={styles.reviews}>({product.reviews} reviews)</span>
                </div>
                <div className={styles.metaDot} />
                <div className={styles.sales}>{product.sales}+ Sales</div>
              </div>
              
              <p className={styles.desc}>{product.description}</p>
              
              <div className={styles.priceBox}>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{format(product)}</span>
                  {originalPrice && <span className={styles.original}>{originalPrice}</span>}
                </div>
                <button className={styles.buyBtn} onClick={() => setShowCheckout(true)}>
                  <ShoppingBag size={18} /> Buy Now
                </button>
              </div>

              {/* Specs */}
              <div className={styles.specs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Category</span>
                  <span className={styles.specVal}>{product.subcategory}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Format</span>
                  <span className={styles.specVal}>{product.extension}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Length</span>
                  <span className={styles.specVal}>{product.lineCount}</span>
                </div>
              </div>

              {/* What's Included */}
              {product.included?.length > 0 && (
                <div className={styles.included}>
                  <h3 className={styles.incTitle}>What's Included</h3>
                  <ul className={styles.incList}>
                    {product.included.map(item => (
                      <li key={item} className={styles.incItem}>
                        <CheckCircle size={16} style={{ color: 'var(--green)' }}/> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>

        {/* Details Section */}
        <div className={styles.detailsSection}>
          <div className={styles.detailsGrid}>
            
            {/* Syllabus */}
            {product.syllabus?.length > 0 && (
              <ScrollReveal>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}><FileText size={20} /> Syllabus Covered</h3>
                  <ul className={styles.syllList}>
                    {product.syllabus.map((s, i) => (
                      <li key={i} className={styles.syllItem}>
                        <span className={styles.syllDot}/> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}

            {/* Code Snippet / Features */}
            {product.previewCode && (
              <ScrollReveal delay={0.1}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}><Eye size={20} /> Preview Snippet</h3>
                  <pre className={styles.codePre}>
                    {product.previewCode}
                  </pre>
                </div>
              </ScrollReveal>
            )}

          </div>
        </div>
      </div>

      {showCheckout && <CheckoutModal product={product} onClose={() => setShowCheckout(false)} />}
    </div>
  );
}
