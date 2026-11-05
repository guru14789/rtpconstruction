import { motion } from 'framer-motion';
import { Shield, Thermometer, Ruler } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const iconMap = {
  Shield,
  Thermometer,
  Ruler,
};

export default function Technology() {
  const { technology } = siteConfig;

  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg)',
      }}
    >
      {/* Abstract background shapes */}
      <div className="abstract-shape abstract-shape-1" style={{ top: 'auto', bottom: '-100px', right: '-100px', width: 400, height: 400, opacity: 0.05 }} aria-hidden="true" />
      <div className="abstract-shape abstract-shape-2" style={{ top: '10%', left: 'auto', right: '-100px', width: 300, height: 300, opacity: 0.04 }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div {...fadeUp(0.1)} style={{ maxWidth: 700, marginBottom: 'var(--space-8)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.1,
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-3)',
          }}>
            Technology
          </span>
          <h2
            id="technology-heading"
            style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: -0.03,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-4)',
            }}
          >
            {technology.heading}
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 18px)',
            lineHeight: 1.8,
            color: 'var(--color-text-muted)',
          }}>
            {technology.subtext}
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Illustration */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '4/3',
            background: 'var(--color-bg-alt)',
          }}>
            <img
              src={technology.illustrationUrl}
              alt="Архитектурная иллюстрация каркасной конструкции дома с изометрическим видом несущих балок и стоек"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.8s ease',
              }}
              loading="lazy"
            />
          </div>

          {/* Feature Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
          }}>
            {technology.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--color-card-dark)',
                  border: '1px solid #333',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-5) var(--space-6)',
                  color: 'var(--color-bg)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'var(--space-5)',
                  alignItems: 'start',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#444';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 56,
                  height: 56,
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 4,
                }}>
                  {(() => {
                    const IconComponent = iconMap[feature.icon];
                    return <IconComponent size={28} color="var(--color-bg)" aria-hidden="true" />;
                  })()}
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: 'var(--color-bg)',
                    marginBottom: 'var(--space-2)',
                    letterSpacing: -0.02,
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(247,247,245,0.7)',
                  }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}