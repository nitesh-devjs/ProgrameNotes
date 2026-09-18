import React, { useState } from 'react';
import { ArrowRight, Globe, Layers, Smartphone, Zap, CheckCircle, Star, Users, Code2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: Globe,
    title: 'Business Website',
    desc: 'Professional, mobile-first websites for local businesses, startups, and personal brands.',
    price: '₹4,999',
    color: 'var(--accent-light)', bg: 'rgba(124,58,237,0.08)',
    features: ['Responsive Design', 'Contact Form', 'Google Maps', 'SEO Optimized', '3 Revisions'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Web App',
    desc: 'Complete React + Node.js applications with database, authentication, and API integrations.',
    price: '₹14,999',
    color: 'var(--cyan)', bg: 'rgba(6,182,212,0.08)',
    features: ['React 19 Frontend', 'REST API Backend', 'Database Design', 'Auth System', '5 Revisions'],
    popular: true,
  },
  {
    icon: Smartphone,
    title: 'Landing Page',
    desc: 'High-converting landing pages with animations, CTAs, and pixel-perfect design.',
    price: '₹2,499',
    color: 'var(--green)', bg: 'rgba(16,185,129,0.08)',
    features: ['Single Page', 'Animations', 'Mobile First', 'Fast Load', '2 Revisions'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery Call',       desc: 'We discuss your requirements, timeline, and goals in a 30-min call.' },
  { step: '02', title: 'Design Mockup',        desc: 'I deliver a Figma mockup of the UI within 2 days for your approval.' },
  { step: '03', title: 'Development',          desc: 'Clean, production-grade code written with React, CSS Modules, and best practices.' },
  { step: '04', title: 'Review & Revisions',   desc: 'You review the live preview and request changes within your revision limit.' },
  { step: '05', title: 'Launch & Handover',    desc: 'Fully deployed website + source code + documentation — ready to go live.' },
];

const TECH = ['React 19', 'Node.js', 'Vite', 'CSS Modules', 'Framer Motion', 'MongoDB', 'REST API', 'Figma', 'Vercel'];

export default function Services() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <ScrollReveal>
            <p className={styles.headerLabel}>Client Services</p>
            <h1 className={styles.headerTitle}>
              Hand-Crafted Websites for<br />
              <span className={styles.gradText}>Your Business</span>
            </h1>
            <p className={styles.headerSub}>
              Production-grade, mobile-first websites built by a full-stack developer.
              Clean code, transparent pricing, on-time delivery.
            </p>
            <div className={styles.headerBtns}>
              <a href="https://wa.me/919876543210?text=Hi! I'm interested in your web development services." target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <Zap size={16} /> Get a Free Quote
              </a>
              <a href="mailto:support@programenote.dev" className={styles.secondaryBtn}>
                Send Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Services */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Pricing</span>
              <h2 className={styles.sectionTitle}>Choose Your Plan</h2>
            </div>
          </ScrollReveal>

          <div className={styles.plansGrid}>
            {SERVICES.map(({ icon: Icon, title, desc, price, color, bg, features, popular }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.1}>
                <div className={`${styles.planCard} ${popular ? styles.popular : ''}`}>
                  {popular && <div className={styles.popularBadge}>Most Popular</div>}
                  <div className={styles.planIcon} style={{ background: bg, color }}>
                    <Icon size={26} />
                  </div>
                  <h3 className={styles.planTitle}>{title}</h3>
                  <p className={styles.planDesc}>{desc}</p>
                  <div className={styles.planPrice}>{price} <span>onwards</span></div>
                  <ul className={styles.planFeatures}>
                    {features.map(f => (
                      <li key={f} className={styles.planFeature}>
                        <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.planBtn} ${popular ? styles.planBtnPrimary : styles.planBtnSecondary}`}>
                    Get Started <ArrowRight size={15} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>How It Works</span>
              <h2 className={styles.sectionTitle}>My 5-Step Process</h2>
              <p className={styles.sectionSub}>Transparent, collaborative, and deadline-driven. Always.</p>
            </div>
          </ScrollReveal>

          <div className={styles.processSteps}>
            {PROCESS.map(({ step, title, desc }, i) => (
              <ScrollReveal key={step} direction="up" delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>{step}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{title}</h4>
                    <p className={styles.stepDesc}>{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Stack</span>
              <h2 className={styles.sectionTitle}>Technologies I Work With</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.techGrid}>
              {TECH.map(t => (
                <div key={t} className={styles.techPill}>{t}</div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to Build Something Great?</h2>
              <p className={styles.ctaDesc}>Drop a WhatsApp or email to get started. Usually reply within 2 hours.</p>
              <a href="https://wa.me/919876543210?text=Hi! I want a website." target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
