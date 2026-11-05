import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Close() {
  const { close, label } = siteConfig;

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: 'var(--ground-2)',
        padding: 'var(--space-10) 0 var(--space-8)',
        overflow: 'hidden',
      }}
      aria-labelledby="close-heading"
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-10)',
            paddingBottom: 'var(--space-8)',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          <div style={{ maxWidth: '28ch' }}>
            <h2
              id="close-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                marginBottom: 'var(--space-4)',
              }}
            >
              {close.headline}
            </h2>
            <p style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: 'var(--muted)',
            }}>
              {close.finePrint}
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            marginLeft: 'auto',
          }}>
            <a href="#contact" className="btn btn-primary">
              {close.ctaPrimary}
              <ChevronRight size={14} aria-hidden="true" />
            </a>
            <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {close.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(80px, 14vw, 200px)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
            transform: 'translateY(15%)',
            overflow: 'visible',
          }}
          aria-label={`${label.name} Records`}
        >
          {label.name}
          <span className="period" style={{ color: 'var(--amber)' }}>.RECORDS</span>
        </motion.div>
      </div>

      <footer style={{
        position: 'relative',
        paddingTop: 'var(--space-6)',
        borderTop: '1px solid var(--hairline)',
        marginTop: 'var(--space-6)',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 0.1,
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          <span>{close.footer}</span>
          <nav style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <a href="#home" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--ink)'} onMouseLeave={e => e.target.style.color = 'var(--muted)'}>Home</a>
            <a href="#releases" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--ink)'} onMouseLeave={e => e.target.style.color = 'var(--muted)'}>Catalogue</a>
            <a href="#roster" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--ink)'} onMouseLeave={e => e.target.style.color = 'var(--muted)'}>Artists</a>
          </nav>
        </div>
      </footer>
    </section>
  );
}