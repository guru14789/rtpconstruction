import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-white)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Grid Layout: Text left, Images right, Stats far right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr auto',
          gap: '64px',
          alignItems: 'start',
        }}>
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              paddingTop: '16px',
              maxWidth: 420,
            }}
          >
            <span className="label label-dot" style={{ color: 'var(--color-text-muted)' }}>
              {about.label}
            </span>
            <h2
              id="about-heading"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--color-black)',
                marginBottom: '32px',
                textTransform: 'uppercase',
              }}
            >
              {about.heading}
            </h2>
            <p style={{
              fontSize: 'clamp(11px, 1.1vw, 13px)',
              lineHeight: 1.8,
              color: 'var(--color-text-muted)',
              marginBottom: '48px',
              maxWidth: 380,
            }}>
              {about.description}
            </p>
            <a href="#about" className="link-arrow" aria-label="More about us">
              {about.linkText}
              <ChevronRight size={14} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Middle Column - Image Collage with Circular Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            {/* Large Circular Background Shape */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '10%',
                transform: 'translateX(-50%)',
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'var(--color-light-gray)',
                zIndex: 0,
              }}
            />

            {/* Secondary/Smaller Image (bottom-left of collage) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                position: 'relative',
                zIndex: 1,
                width: 180,
                height: 180,
                marginRight: -40,
                marginBottom: 20,
                borderRadius: 0,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(5,5,5,0.1)',
              }}
            >
              <img
                src={about.secondaryImageUrl}
                alt={about.secondaryImageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </motion.div>

            {/* Main Architectural Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'relative',
                zIndex: 2,
                width: 'clamp(280px, 45vw, 420px)',
                aspectRatio: '3/4',
                borderRadius: 0,
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(5,5,5,0.12)',
              }}
            >
              <img
                src={about.mainImageUrl}
                alt={about.mainImageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '96px',
              paddingTop: '32px',
              paddingLeft: '48px',
              borderLeft: '1px solid var(--color-border)',
              minWidth: 180,
            }}
          >
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'var(--color-black)',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: 'var(--color-text-muted)',
                  whiteSpace: 'pre-line',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}