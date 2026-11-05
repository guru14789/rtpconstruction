import { motion } from 'framer-motion';
import { CreditCard, Users, Percent, Building2 } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const iconMap = {
  CreditCard,
  Users,
  Percent,
  Building2,
};

export default function Payment() {
  const { payment } = siteConfig;

  return (
    <section
      id="payment"
      aria-labelledby="payment-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg)',
      }}
    >
      {/* Abstract background shapes */}
      <div className="abstract-shape abstract-shape-1" style={{ top: '-150px', right: '-150px', width: 500, height: 500, opacity: 0.03 }} aria-hidden="true" />
      <div className="abstract-shape abstract-shape-2" style={{ bottom: '-100px', left: '-100px', width: 350, height: 350, opacity: 0.02 }} aria-hidden="true" />

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
            Способы оплаты
          </span>
          <h2
            id="payment-heading"
            style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: -0.03,
              color: 'var(--color-text)',
            }}
          >
            {payment.heading}
          </h2>
        </motion.div>

        {/* Payment Methods Grid */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-5)',
          }}
        >
          {payment.methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
              style={{
                background: index % 2 === 0 ? 'var(--color-card)' : 'var(--color-card-dark)',
                border: index % 2 === 0 ? '1px solid var(--color-border)' : '1px solid #333',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                color: index % 2 === 0 ? 'var(--color-text)' : 'var(--color-bg)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 48px var(--color-shadow-hover)';
                if (index % 2 === 0) {
                  e.currentTarget.style.borderColor = 'var(--color-border-dark)';
                } else {
                  e.currentTarget.style.borderColor = '#444';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px var(--color-shadow)';
                if (index % 2 === 0) {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                } else {
                  e.currentTarget.style.borderColor = '#333';
                }
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                background: index % 2 === 0 ? 'var(--color-bg-alt)' : 'rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)',
              }}>
                {(() => {
                  const IconComponent = iconMap[method.icon];
                  return <IconComponent size={28} color={index % 2 === 0 ? 'var(--color-accent)' : 'var(--color-bg)'} aria-hidden="true" />;
                })()}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: -0.02,
                marginBottom: 'var(--space-3)',
                color: index % 2 === 0 ? 'var(--color-text)' : 'var(--color-bg)',
              }}>
                {method.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: index % 2 === 0 ? 'var(--color-text-muted)' : 'rgba(247,247,245,0.7)',
                flex: 1,
                marginBottom: 'var(--space-4)',
              }}>
                {method.description}
              </p>

              {/* Arrow */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: index % 2 === 0 ? 'var(--color-accent)' : 'var(--color-bg)',
                color: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-accent)',
                transition: 'transform 0.2s ease',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}