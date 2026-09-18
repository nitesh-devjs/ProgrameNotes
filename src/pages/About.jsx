import React from 'react';
import { Mail, CheckCircle, Code2, Layers, Briefcase, Zap, Users } from 'lucide-react';
import { InstagramIcon, GithubIcon } from '../components/SocialIcons';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import profilePhoto from '../assets/profile-photo.jpg';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <ScrollReveal>
            <div className={styles.profileCard}>
              <div className={styles.thumb}>
                <img src={profilePhoto} alt="Nitesh Singh" className={styles.img} />
                <div className={styles.thumbOverlay} />
              </div>
              <div className={styles.profileInfo}>
                <h1 className={styles.name}>Nitesh Singh</h1>
                <p className={styles.title}>Full-Stack Developer & Technical Educator</p>
                <div className={styles.socials}>
                  <a href="https://instagram.com/programenote" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <InstagramIcon size={16} /> @programenote
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <GithubIcon size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={styles.bioSection}>
              <p className={styles.bioText}>
                Hey! I'm Nitesh. I specialize in building high-performance web applications using React, Node.js, and modern CSS architectures. 
                <br /><br />
                I started <strong>programenote</strong> to bridge the gap between complex technical concepts and easy-to-understand study materials. 
                Whether you need ultra-clear notes to ace your board exams, or a production-ready website for your business, I've got you covered.
              </p>
              
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <UsersIcon className={styles.statIcon} />
                  <div className={styles.statVal}>50k+</div>
                  <div className={styles.statLabel}>Community</div>
                </div>
                <div className={styles.statBox}>
                  <Code2 className={styles.statIcon} style={{ color: 'var(--cyan)' }}/>
                  <div className={styles.statVal}>25+</div>
                  <div className={styles.statLabel}>Client Sites</div>
                </div>
                <div className={styles.statBox}>
                  <Layers className={styles.statIcon} style={{ color: 'var(--green)' }}/>
                  <div className={styles.statVal}>50+</div>
                  <div className={styles.statLabel}>Premium Notes</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contactCard}>
              <div className={styles.contactLeft}>
                <h2 className={styles.contactTitle}>Let's work together</h2>
                <p className={styles.contactDesc}>
                  Got a project in mind, need help with notes, or just want to say hi? 
                  My inbox is always open.
                </p>
              </div>
              <div className={styles.contactRight}>
                <a href="mailto:support@programenote.dev" className={styles.emailBtn}>
                  <Mail size={18} /> support@programenote.dev
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  WhatsApp Me
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function UsersIcon(props) {
  return <Users {...props} style={{ color: 'var(--accent-light)' }} />;
}
