import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function StatementFold() {
  const { statement } = siteConfig;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const highlightRegex = new RegExp(`(${statement.highlight})`, 'gi');
  const parts = statement.text.split(highlightRegex).filter(Boolean);

  return (
    <section
      id="statement"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--ground)',
        overflow: 'hidden',
      }}
      aria-labelledby="statement-heading"
    >
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-8)',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '22ch' }}
        >
          <span className="label label-amber">
            {statement.label}
          </span>

          <h2
            id="statement-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              marginTop: 'var(--space-4)',
              marginBottom: 'var(--space-6)',
            }}
          >
            {parts.map((part, i) =>
              part === statement.highlight ? (
                <span key={i} style={{ color: 'var(--amber)' }}>{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>

          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-6)',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px var(--hairline)',
            }}>
              {statement.index}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1',
            maxWidth: 520,
            justifySelf: 'end',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-20%',
              width: '120%',
              height: '120%',
              borderRadius: '50%',
              opacity: 0.15,
              willChange: 'transform',
              transform: `translate(${imageX}px, ${imageY}px) rotate(${imageRotate}deg)`,
            }}
          >
            <img
              src={statement.imageUrl}
              alt={statement.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-6)',
          left: 'var(--container-padding)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}
      >
        {statement.label}
      </div>
    </section>
  );
}