import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, GithubIcon } from '../SocialIcons';
import logoIcon from '../../assets/logo-icon.svg';
import styles from './Footer.module.css';

const LINKS = {
  Product: [
    { label: 'Notes Store', to: '/store' },
    { label: 'Programming Notes', to: '/store?cat=programming' },
    { label: 'Science Notes', to: '/store?cat=science' },
    { label: 'Math Notes', to: '/store?cat=math' },
  ],
  Company: [
    { label: 'About Nitesh', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Privacy Policy', to: '/legal?tab=privacy' },
    { label: 'Terms of Service', to: '/legal?tab=terms' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logoIcon} alt="programenote.dev" className={styles.logoImg} />
              <span>programenote</span>
              <span className={styles.logoDev}>.dev</span>
            </Link>
            <p className={styles.tagline}>
              Premium study notes &amp; hand-crafted websites.<br />
              Built for students who mean business.
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com/programenote" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="mailto:support@programenote.dev" className={styles.social} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colHead}>{heading}</h4>
              <ul className={styles.colList}>
                {items.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className={styles.colLink}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHead}>Contact</h4>
            <ul className={styles.colList}>
              <li className={styles.contactItem}>
                <Mail size={14} className={styles.contactIcon} />
                support@programenote.dev
              </li>
              <li className={styles.contactItem}>
                <MapPin size={14} className={styles.contactIcon} />
                India
              </li>
            </ul>
            <a
              href="https://instagram.com/programenote"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
            >
              <InstagramIcon size={14} />
              @programenote
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} programenote.dev — All rights reserved.
          </p>
          <p className={styles.madewith}>
            Crafted with ❤️ by Nitesh Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
