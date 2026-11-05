import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function PortfolioIntro() {
  const { portfolio } = siteConfig;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg)',
        paddingBottom: '128px',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
        >
          <span className="label label-dot" style={{
            display: 'inline-block',
            color: 'var(--color-text-muted)',
            marginBottom: '16px',
          }}>
            {portfolio.label}
          </span>
          <h2
            id="portfolio-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-black)',
              textTransform: 'uppercase',
            }}
          >
            {portfolio.heading}
          </h2>
        </motion.div>

        {/* Placeholder for portfolio grid - would continue below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            marginTop: '128px',
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: 13,
          }}
        >
          <p>Portfolio projects would continue here...</p>
        </motion.div>
      </div>
    </section>
  );
}