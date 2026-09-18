import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, ShoppingBag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCurrency } from '../../context/CurrencyContext';
import logoIcon from '../../assets/logo-icon.svg';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/store', label: 'Store' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { currency, toggle: toggleCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoIcon} alt="programenote.dev" className={styles.logoImg} />
          <span className={styles.logoText}>programenote</span>
          <span className={styles.logoDev}>.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.links}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Currency Toggle */}
          <button
            className={styles.currBtn}
            onClick={toggleCurrency}
            title="Toggle currency"
          >
            <span className={currency === 'INR' ? styles.currActive : styles.currInactive}>₹</span>
            <span className={styles.currDivider}>/</span>
            <span className={currency === 'USD' ? styles.currActive : styles.currInactive}>$</span>
          </button>

          {/* Theme Toggle */}
          <button className={styles.iconBtn} onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Store CTA */}
          <Link to="/store" className={styles.storeCta}>
            <ShoppingBag size={15} />
            Browse Store
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/store" className={styles.storeCta} onClick={() => setMenuOpen(false)}>
          <ShoppingBag size={15} /> Browse Store
        </Link>
      </div>
    </nav>
  );
}
