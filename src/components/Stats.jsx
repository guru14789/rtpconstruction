import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../config/siteData';

function CountUp({ target, suffix, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} style={{ background: '#0d0f11', borderTop: '1px solid rgba(249,115,22,0.15)', borderBottom: '1px solid rgba(249,115,22,0.15)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="stats-grid">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                padding: '48px 32px',
                borderRight: i < siteConfig.stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: '#F97316',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                <CountUp target={stat.number} suffix={stat.suffix} started={inView} />
              </div>
              <div style={{ color: '#9aa0a6', fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05); }
        }
      `}</style>
    </section>
  );
}
