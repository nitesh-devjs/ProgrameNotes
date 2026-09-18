import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LANGUAGE_DETAILS } from '../data/languageDetails';
import { PRODUCTS } from '../data/products';
import ExclusiveNoteCard from '../components/ExclusiveNoteCard/ExclusiveNoteCard';
import styles from './LanguageDetail.module.css';

export default function LanguageDetail() {
  const { id } = useParams();
  
  const language = LANGUAGE_DETAILS[id];
  
  const relatedProduct = useMemo(() => {
    if (!language || !language.relatedProductId) return null;
    return PRODUCTS.find(p => p.id === language.relatedProductId);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!language) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.page} style={{ '--language-color': language.color }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.icon}>{language.icon}</div>
          <h1 className={styles.title}>{language.name}</h1>
          <p className={styles.tagline}>{language.tagline}</p>
        </div>
      </section>

      {/* Main Massive Details */}
      <section className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.text}>{language.description}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>History</h2>
            <p className={styles.text}>{language.history}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.grid}>
              {language.keyFeatures.map((feature, i) => (
                <div key={i} className={styles.card}>{feature}</div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Use Cases</h2>
            <div className={styles.grid}>
              {language.useCases.map((useCase, i) => (
                <div key={i} className={styles.card}>{useCase}</div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.statsBox}>
            {language.stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Syntax Sneak Peek</h2>
            <div className={styles.codeBlock}>
              <pre>{language.codeSnippet}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Notes Section */}
      <section className={styles.noteSection}>
        <div className={styles.noteHeader}>
          <h2>Premium {language.name} Notes</h2>
          <p>Master {language.name} faster with our handcrafted resources.</p>
        </div>
        
        <div className={styles.noteWrapper}>
          {relatedProduct ? (
            <ExclusiveNoteCard product={relatedProduct} />
          ) : (
            <div className={styles.comingSoon}>
              <h3>Notes Coming Soon</h3>
              <p>We are currently working on premium notes for {language.name}. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
