import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function PortalHero() {
  const { hero } = siteConfig;
  const stageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end start'],
  });

  const panelProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const duotoneOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.35]);
  const dot1X = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const dot1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const dot2X = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const dot2Y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const titleTracking = useTransform(scrollYProgress, [0, 1], [-0.02, -0.05]);
  const titleLeftX = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const titleRightX = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      id="home"
      ref={stageRef}
      className="portal-stage"
      style={{
        position: 'sticky',
        top: 0,
        height: '250vh',
        overflow: 'hidden',
        isolation: 'isolate',
        background: 'var(--ground)',
      }}
      aria-labelledby="portal-title"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <motion.img
          src={hero.imageUrl}
          alt={hero.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            willChange: 'transform',
            transform: imageScale,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, var(--amber) 0%, var(--teal) 100%)',
            mixBlendMode: 'overlay',
            opacity: duotoneOpacity,
            willChange: 'opacity',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, var(--ground) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <motion.div
          className="portal-panel"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '51%',
            background: 'var(--ground)',
            willChange: 'transform',
            x: panelProgress,
            transform: [{ x: 0 }, { x: '-110%' }],
          }}
        />

        <motion.div
          className="portal-panel"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '51%',
            background: 'var(--ground)',
            willChange: 'transform',
            x: panelProgress,
            transform: [{ x: 0 }, { x: '110%' }],
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--amber)',
            boxShadow: '0 0 30px 10px var(--amber)',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
            opacity: 0.8,
            x: dot1X,
            y: dot1Y,
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--teal)',
            boxShadow: '0 0 30px 10px var(--teal)',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
            opacity: 0.8,
            x: dot2X,
            y: dot2Y,
          }}
        />
      </motion.div>

      <motion.h1
        id="portal-title"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(64px, 10vw, 160px)',
          lineHeight: 1,
          color: 'var(--ink)',
          willChange: 'transform, letter-spacing',
          scale: titleScale,
          letterSpacing: titleTracking,
        }}
        aria-label={`${hero.wordmark.join(' ')}`}
      >
        <motion.span
          style={{
            display: 'block',
            willChange: 'transform',
            x: titleLeftX,
          }}
        >
          {hero.wordmark[0]}
        </motion.span>
        <motion.span
          style={{
            display: 'block',
            willChange: 'transform',
            x: titleRightX,
          }}
        >
          {hero.wordmark[1]}
        </motion.span>
      </motion.h1>

      <div
        style={{
          position: 'absolute',
          left: 'var(--container-padding)',
          right: 'var(--container-padding)',
          top: 'calc(var(--nav-height) + var(--space-6))',
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          {hero.metadata.top}
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 'var(--container-padding)',
          right: 'var(--container-padding)',
          bottom: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          {hero.metadata.bottom}
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 8,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}