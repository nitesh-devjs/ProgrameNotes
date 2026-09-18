import React, { useEffect } from 'react';
import { X, Send } from 'lucide-react';
import styles from './ContactModal.module.css';

export default function ContactModal({ isOpen, onClose }) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Project Inquiry</h2>
          <p className={styles.subtitle}>Fill out the basic details below and I'll get back to you.</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name</label>
            <input type="text" placeholder="John Doe" required className={styles.inputField} />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Email</label>
            <input type="email" placeholder="john@example.com" required className={styles.inputField} />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Project Type</label>
            <select required className={styles.inputField} defaultValue="">
              <option value="" disabled>Select a project type...</option>
              <option value="school">🏫 School Project (10th/12th)</option>
              <option value="college">🎓 College Assignment</option>
              <option value="business">💼 Business Website</option>
              <option value="portfolio">🚀 Personal Portfolio</option>
              <option value="other">Other / Custom</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Basic Details</label>
            <textarea placeholder="Briefly describe what you need..." rows="3" required className={styles.inputField}></textarea>
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Send Inquiry <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
