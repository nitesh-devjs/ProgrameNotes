import React, { useEffect } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow}></div>
      <div className="container">
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <span className={styles.sectionLabel}>Get in Touch</span>
            <h1 className={styles.sectionTitle}>Let's Talk.</h1>
            <p className={styles.contactDesc}>
              Whether you need a custom website for a school project, a professional business portfolio, or have a question about our premium notes, feel free to drop a message. I'm always open to discussing new projects and opportunities.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrap}><Mail size={24} /></div>
                <span>hello@programenote.dev</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrap}><MessageSquare size={24} /></div>
                <span>@programenote</span>
              </div>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input type="text" placeholder="John Doe" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Email</label>
              <input type="email" placeholder="john@example.com" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Project Type / Subject</label>
              <input type="text" placeholder="e.g., E-commerce Website, 12th Physics Notes" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea placeholder="Tell me about your project or inquiry..." rows="5" required className={styles.inputField}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
