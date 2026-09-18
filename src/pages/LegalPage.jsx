import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './LegalPage.module.css';

export default function LegalPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'terms';

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        
        <ScrollReveal>
          <div className={styles.sidebar}>
            <button className={`${styles.tab} ${activeTab === 'terms' ? styles.active : ''}`} onClick={() => setSearchParams({ tab: 'terms' })}>
              Terms of Service
            </button>
            <button className={`${styles.tab} ${activeTab === 'privacy' ? styles.active : ''}`} onClick={() => setSearchParams({ tab: 'privacy' })}>
              Privacy Policy
            </button>
            <button className={`${styles.tab} ${activeTab === 'refunds' ? styles.active : ''}`} onClick={() => setSearchParams({ tab: 'refunds' })}>
              Refund Policy
            </button>
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal direction="left">
            {activeTab === 'terms' && (
              <div className={styles.document}>
                <h1>Terms of Service</h1>
                <p>Last updated: September 2026</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using programenote.dev, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <h2>2. Digital Products</h2>
                <p>All study materials, notes, and digital downloads provided on this website are for personal, non-commercial use only. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said products, whether in whole or in part, for commercial purposes or for personal gain.</p>
                <h2>3. Web Development Services</h2>
                <p>Web development services are subject to a separate contract and statement of work agreed upon prior to commencement.</p>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className={styles.document}>
                <h1>Privacy Policy</h1>
                <p>Last updated: September 2026</p>
                <h2>1. Information We Collect</h2>
                <p>We only collect information that you voluntarily provide to us via email or WhatsApp when purchasing a product or inquiring about our services.</p>
                <h2>2. Use of Information</h2>
                <p>Your email or phone number is solely used to deliver digital products or to communicate regarding web development projects. We do not sell, trade, or rent your personal identification information to others.</p>
              </div>
            )}

            {activeTab === 'refunds' && (
              <div className={styles.document}>
                <h1>Refund Policy</h1>
                <p>Last updated: September 2026</p>
                <h2>Digital Downloads</h2>
                <p>Due to the digital nature of our products (PDFs, Source Code), all sales are final. Once a download link has been sent to your email or WhatsApp, we cannot offer refunds, returns, or exchanges.</p>
                <h2>Services</h2>
                <p>Refunds for web development services are handled according to the specific contract signed before the project begins. Generally, initial deposits are non-refundable to cover discovery and design time.</p>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
