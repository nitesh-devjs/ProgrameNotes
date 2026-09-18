import React, { useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BookOpen, BookCheck, GraduationCap, ChevronRight } from 'lucide-react';
import { CATEGORY_DETAILS } from '../data/categoryDetails';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './CategoryDetail.module.css';

export default function CategoryDetail() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);

  const category = CATEGORY_DETAILS[id];
  
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return PRODUCTS.filter(p => p.category === category.id);
  }, [category]);

  if (!category) {
    return <Navigate to="/store" replace />;
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBg} 
          style={{ backgroundImage: `url(${category.coverImage})` }} 
        />
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.title}>{category.title}</h1>
            <p className={styles.desc}>{category.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              <GraduationCap size={32} style={{ color: category.accentColor }} />
              Comprehensive Syllabus
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Everything you will master in this category</p>
          </ScrollReveal>
        </div>

        <div className={styles.syllabusGrid}>
          {category.syllabus.map((module, i) => (
            <ScrollReveal key={module.title} delay={i * 0.1}>
              <div className={styles.module}>
                <h3 className={styles.moduleTitle}>
                  <div className={styles.moduleIcon} style={{ background: `${category.accentColor}20`, color: category.accentColor }}>
                    <BookCheck size={20} />
                  </div>
                  {module.title}
                </h3>
                <ul className={styles.topicsList}>
                  {module.topics.map((topic, j) => (
                    <li key={j} className={styles.topic}>
                      <span className={styles.topicDot} style={{ background: category.accentColor }} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className={`${styles.section} ${styles.notesSection}`}>
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              <BookOpen size={32} style={{ color: category.accentColor }} />
              Available Notes & Courses
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Select a subject below to view details and purchase</p>
          </ScrollReveal>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} onBuyNow={setSelected} />
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Notes coming soon for this category.</p>
        )}
      </section>

      {/* Checkout Modal */}
      {selected && <CheckoutModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
