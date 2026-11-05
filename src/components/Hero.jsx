import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const HERO_VIDEO = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-house-with-swimming-pool-39101-large.mp4";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '80px',
        background: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      {/* Full-width Video Background - Edge to Edge */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Left Text Content - Inside Container */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '96px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            maxWidth: 200,
            marginBottom: '48px',
            lineHeight: 1.5,
            fontSize: 12,
            fontWeight: 400,
            color: 'var(--color-black)',
            whiteSpace: 'pre-line',
          }}
        >
          {hero.paragraph}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button className="btn btn-black" style={{
            padding: '8px 20px',
            minWidth: 125,
            height: 36,
            fontSize: 11,
          }}>
            {hero.ctaText}
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Full-width Video Viewport - Extends to Right Edge */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          top: '80px',
          right: 0,
          width: '65vw',
          maxWidth: '100%',
          height: 'calc(100vh - 80px)',
          minHeight: 500,
          borderRadius: 0,
          overflow: 'hidden',
          boxShadow: '-40px 0 80px -20px rgba(5,5,5,0.15)',
          zIndex: 2,
        }}
      >
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          aria-label={hero.imageAlt}
        />
      </motion.div>

      {/* Giant Typography - Overlapping */}
      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          zIndex: 10,
          fontSize: 'clamp(60px, 9vw, 125px)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.07em',
          color: 'var(--color-black)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          maxWidth: 'none',
          paddingLeft: 'var(--container-padding)',
        }}
        aria-label="Dream Studio"
      >
        {hero.giantText}
      </motion.h1>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '48px',
          left: 'var(--container-padding)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: 0.1,
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}