import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight, Zap, Download, BookOpen, Code2, FlaskConical,
  Calculator, ShoppingBag, Star, Users, TrendingUp, Award, ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import heroGraphic from '../assets/hero-graphic.jpg';
import styles from './Home.module.css';

// ─── Data ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: 5000, suffix: '+', label: 'Students Helped', icon: Users, color: 'var(--cyan)' },
  { value: 50,   suffix: '+', label: 'Premium Notes',   icon: BookOpen, color: 'var(--accent-light)' },
  { value: 4.9,  suffix: '★', label: 'Avg Rating',      icon: Star,  color: 'var(--amber)', decimals: 1 },
  { value: 299,  prefix: '₹', label: 'Starting Price',  icon: TrendingUp, color: 'var(--green)' },
];

const MARQUEE_ITEMS = ['Java', 'React', '12th Physics', 'CSS Layouts', 'Python', 'Math', 'HTML', 'Node.js', 'React Native', 'Commerce', 'Data Structures', 'Algorithms', 'Chemistry', 'JavaScript'];

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Digital Delivery',
    desc: 'Download immediately after purchase. No waiting, no shipping — your notes in seconds.',
    color: 'var(--amber)',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    icon: BookOpen,
    title: 'Handwritten & Structured',
    desc: 'Clear, concise handwritten notes designed to maximize retention and exam performance.',
    color: 'var(--cyan)',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Award,
    title: 'Board & Competitive Ready',
    desc: 'Curated for 10th, 12th, JEE, NEET, and professional programming certifications.',
    color: 'var(--green)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.15)',
  },
  {
    icon: Code2,
    title: 'Built by a Developer',
    desc: 'Every programming note includes real code snippets, architecture diagrams, and interview Qs.',
    color: 'var(--accent-light)',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.15)',
  },
];

const TESTIMONIALS = [
  {
    quote: "The React 19 notes are absolutely incredible. I cleared my interview at a top startup using just these notes. Concise, accurate, and up-to-date.",
    name: 'Aarav Sharma', role: 'SDE at a Bangalore Startup', initial: 'A', color: 'var(--accent-light)',
  },
  {
    quote: "12th Physics notes are a lifesaver. Every derivation is there with clear diagrams. Got 96/100 in my boards — directly attributing it to these notes.",
    name: 'Priya Iyer', role: 'Class 12, CBSE — 96 in Physics', initial: 'P', color: 'var(--cyan)',
  },
  {
    quote: "Been recommending @programenote to my entire coaching batch. Notes are crisp, professional, and worth every rupee. Already bought 3 sets.",
    name: 'Rohan Verma', role: 'JEE 2025 Aspirant', initial: 'R', color: 'var(--amber)',
  },
];

const CATEGORIES = [
  { icon: Code2,        label: 'Programming',  to: '/store?cat=programming', color: 'var(--accent-light)', desc: 'Java, React, Python, DSA...' },
  { icon: FlaskConical, label: 'Science',       to: '/store?cat=science',     color: 'var(--cyan)',         desc: 'Physics, Chemistry, Bio...' },
  { icon: Calculator,   label: 'Mathematics',   to: '/store?cat=math',        color: 'var(--amber)',        desc: 'Calculus, Algebra, Stats...' },
  { icon: BookOpen,     label: 'Commerce',      to: '/store?cat=commerce',    color: 'var(--green)',        desc: 'Accounts, Economics, BST...' },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function Counter({ value, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 2, ease: 'easeOut' });
    const unsub = motionVal.on('change', v => {
      setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString());
    });
    return () => { controls.stop(); unsub(); };
  }, [value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 6);

  return (
    <div className={styles.page}>

      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGradient} />
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Zap size={13} />
              <span>Premium Study Notes & Dev Services</span>
              <ChevronRight size={13} />
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Notes That Actually{' '}
              <span className={styles.heroGradientText}>Help You Pass</span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium handwritten notes for 10th–12th boards, JEE/NEET prep,
              and professional programming courses. Instant download. No fluff.
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/store" className={styles.ctaPrimary}>
                <ShoppingBag size={17} />
                Browse All Notes
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={styles.ctaSecondary}>
                Hire Me for Web Dev
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className={styles.heroImageWrap}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src={heroGraphic} alt="Coding and Study Notes" className={styles.heroImage} />
          </motion.div>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ STATS ══════════ */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map(({ value, suffix, prefix, label, icon: Icon, color, decimals }) => (
              <ScrollReveal key={label} direction="up" delay={0.05}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon} style={{ background: `${color}18`, color }}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.statNum} style={{ color }}>
                    <Counter value={value} suffix={suffix} prefix={prefix} decimals={decimals} />
                  </div>
                  <p className={styles.statLabel}>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CATEGORIES ══════════ */}
      <section className={styles.catsSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Browse by Subject</span>
              <h2 className={styles.sectionTitle}>Find Your Notes</h2>
            </div>
          </ScrollReveal>
          <div className={styles.catsGrid}>
            {CATEGORIES.map(({ icon: Icon, label, to, color, desc }, i) => (
              <ScrollReveal key={label} direction="up" delay={i * 0.08}>
                <Link to={to} className={styles.catCard}>
                  <div className={styles.catIcon} style={{ background: `${color}18`, color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.catLabel}>{label}</h3>
                  <p className={styles.catDesc}>{desc}</p>
                  <div className={styles.catArrow} style={{ color }}>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED PRODUCTS ══════════ */}
      <section className={styles.featuredSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionRow}>
              <div>
                <span className={styles.sectionLabel}>Top Picks</span>
                <h2 className={styles.sectionTitle}>Featured Notes</h2>
              </div>
              <Link to="/store" className={styles.viewAll}>
                View all <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
          <ProductGrid
            products={featured}
            onBuyNow={setSelectedProduct}
          />
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className={styles.featuresSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Why programenote</span>
              <h2 className={styles.sectionTitle}>Built Different, Built Better</h2>
              <p className={styles.sectionSub}>
                Not just PDFs — these are precision-crafted study weapons designed to get you results.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.featuresGrid}>
            {FEATURES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.1}>
                <div className={styles.featureCard} style={{ borderColor: border }}>
                  <div className={styles.featureIconWrap} style={{ background: bg, color }}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureDesc}>{desc}</p>
                  <div className={styles.featureAccent} style={{ background: color }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Student Stories</span>
              <h2 className={styles.sectionTitle}>Trusted by Thousands</h2>
              <p className={styles.sectionSub}>Real results from real students across India.</p>
            </div>
          </ScrollReveal>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map(({ quote, name, role, initial, color }, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.12}>
                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>{'★'.repeat(5)}</div>
                  <p className={styles.quote}>"{quote}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatar} style={{ background: `${color}20`, color }}>
                      {initial}
                    </div>
                    <div>
                      <p className={styles.authorName}>{name}</p>
                      <p className={styles.authorRole}>{role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA STRIP ══════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaBox}>
              <div className={styles.ctaGlow} />
              <div className={styles.ctaContent}>
                <span className={styles.sectionLabel}>Ready to level up?</span>
                <h2 className={styles.ctaTitle}>
                  Stop Struggling. Start Scoring.
                </h2>
                <p className={styles.ctaDesc}>
                  Join 5000+ students who trust programenote to simplify complex topics and ace their exams.
                </p>
                <div className={styles.ctaBtns}>
                  <Link to="/store" className={styles.ctaPrimary}>
                    <ShoppingBag size={17} /> Browse All Notes <ArrowRight size={16} />
                  </Link>
                  <Link to="/about" className={styles.ctaSecondary}>
                    Meet Nitesh
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Checkout Modal */}
      {selectedProduct && (
        <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
