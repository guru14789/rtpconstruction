import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function BrandStrip() {
  const { brandStrip } = siteConfig;

  return (
    <section
      aria-labelledby="brand-strip-heading"
      style={{
        position: 'relative',
        background: 'var(--color-charcoal)',
        padding: '32px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px',
        flexWrap: 'wrap',
      }}>
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            flex: '0 0 auto',
            maxWidth: 350,
          }}
        >
          <h2
            id="brand-strip-heading"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 16px)',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: -0.01,
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
              whiteSpace: 'pre-line',
            }}
          >
            {brandStrip.text}
          </h2>
        </motion.div>

        {/* Right Logos */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'clamp(32px, 5vw, 80px)',
            minWidth: 0,
            overflowX: 'auto',
            paddingBottom: 4,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(32px, 5vw, 80px)', whiteSpace: 'nowrap' }}>
            {brandStrip.logos.map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 16px)',
                  fontWeight: 600,
                  letterSpacing: 0.05,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,1)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}