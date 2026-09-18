import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight, Zap, Download, BookOpen, Code2, Layout, Server,
  LineChart, Network, ShoppingBag, Star, Users, TrendingUp, Award, ChevronRight, Mail, MessageSquare, Send
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ContactModal from '../components/ContactModal/ContactModal';
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
    title: 'Professional & Structured',
    desc: 'Clear, concise premium notes designed to maximize retention and exam performance.',
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
  { icon: Layout,        label: 'HTML',         to: '/language/html-css',     color: 'var(--accent-light)', desc: 'Structure of the web.', image: '/images/cat_programming.jpg' },
  { icon: Zap,           label: 'CSS',          to: '/language/html-css',     color: 'var(--cyan)',         desc: 'Style and responsive design.',     image: '/images/cat_science.jpg' },
  { icon: Code2,         label: 'JavaScript',   to: '/language/javascript',   color: 'var(--amber)',        desc: 'Dynamic and interactive logic.',   image: '/images/cat_math.jpg' },
  { icon: Network,       label: 'React JS',     to: '/language/reactjs',      color: 'var(--green)',        desc: 'Modern component-based UI.',   image: '/images/cat_commerce.jpg' },
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Derive products
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
              Premium structured notes for modern programming languages and frameworks,
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
            <motion.img 
              src={heroGraphic} 
              alt="Coding and Study Notes" 
              className={styles.heroImage} 
              animate={{ 
                y: [0, -20, 0, 15, 0], 
                x: [0, 15, 0, -15, 0] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
                <div 
                  className={styles.statCard}
                  style={{ '--hover-color': color }}
                >
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
            {CATEGORIES.map(({ icon: Icon, label, to, color, desc, image }, i) => (
              <ScrollReveal key={label} direction="up" delay={i * 0.08}>
                <Link 
                  to={to} 
                  className={styles.catCard}
                  style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(7, 11, 24, 0.95), rgba(7, 11, 24, 0.4)), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className={styles.catIcon} style={{ background: `${color}18`, color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.catLabel} style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{label}</h3>
                  <p className={styles.catDesc} style={{ color: 'rgba(255,255,255,0.7)' }}>{desc}</p>
                  <div className={styles.catArrow} style={{ color }}>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HIRE ME CTA ══════════ */}
      <section className={styles.hireMeSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.hireMeCard}>
              <div className={styles.hireMeGlow}></div>
              <div className={styles.hireMeContent}>
                <span className={styles.hireMeBadge}>✨ Open for Freelance</span>
                <h2 className={styles.hireMeTitle}>Need a Custom Website?</h2>
                <p className={styles.hireMeDesc}>
                  Whether it's a 10th/12th project, a complex college assignment, a professional business website, or your personal portfolio — I build premium, high-performance web applications tailored to your exact needs.
                </p>
                <div className={styles.hireMeTags}>
                  <span className={styles.hireMeTag}>🏫 School Projects</span>
                  <span className={styles.hireMeTag}>🎓 College Assignments</span>
                  <span className={styles.hireMeTag}>💼 Business Websites</span>
                  <span className={styles.hireMeTag}>🚀 Personal Portfolios</span>
                </div>
                <div className={styles.hireMeActions}>
                  <Link to="/services" className={styles.hireMeBtn}>
                    Hire Me for Web Dev <ArrowRight size={18} />
                  </Link>
                  <button onClick={() => setIsContactModalOpen(true)} className={styles.hireMeBtnSecondary}>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                  <div className={styles.testimonyAuthor}>
                    <div className={styles.avatar} style={{ background: color }}>
                      {initial}
                    </div>
                    <div>
                      <h4 className={styles.authorName}>{name}</h4>
                      <span className={styles.authorRole}>{role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaBox}>
              <div className={styles.ctaGlow}></div>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ready to Top Your Class?</h2>
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

      {/* 🔹 CONTACT SECTION 🔹 */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contactWrapper}>
              <div className={styles.contactInfo}>
                <span className={styles.sectionLabel}>Get in Touch</span>
                <h2 className={styles.sectionTitle}>Let's Talk.</h2>
                <p className={styles.contactDesc}>
                  Have a question about our notes? Need custom notes for your syllabus? Or just want to say hi? Drop us a message.
                </p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrap}><Mail size={20} /></div>
                    <span>hello@programenote.dev</span>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrap}><MessageSquare size={20} /></div>
                    <span>@programenote</span>
                  </div>
                </div>
              </div>
              
              <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" required className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Your Email" required className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="How can we help you?" rows="4" required className={styles.inputField}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Checkout Modal */}
      {selectedProduct && (
        <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
