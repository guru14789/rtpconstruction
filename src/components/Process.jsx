import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Process() {
  const { process } = siteConfig;

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg-alt)',
      }}
    >
      {/* Abstract background shapes */}
      <div className="abstract-shape abstract-shape-1" style={{ top: '-100px', right: '-100px', width: 400, height: 400, opacity: 0.03 }} aria-hidden="true" />
      <div className="abstract-shape abstract-shape-2" style={{ bottom: '10%', left: '-100px', width: 300, height: 300, opacity: 0.02 }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div {...fadeUp(0.1)} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto var(--space-9)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.1,
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-3)',
          }}>
            Как мы работаем
          </span>
          <h2
            id="process-heading"
            style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: -0.03,
              color: 'var(--color-text)',
            }}
          >
            {process.heading}
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5)',
            position: 'relative',
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: 'absolute',
              top: 48,
              left: '10%',
              right: '10%',
              height: 2,
              background: 'var(--color-border)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--space-6) var(--space-4)',
              }}
            >
              {/* Number Circle */}
              <div style={{
                position: 'relative',
                width: 96,
                height: 96,
                borderRadius: '50%',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-5)',
                boxShadow: '0 4px 16px var(--color-shadow)',
                transition: 'all 0.3s ease',
              }}>
                <span style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}>
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: -0.02,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-3)',
                minHeight: 56,
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                maxWidth: 280,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}