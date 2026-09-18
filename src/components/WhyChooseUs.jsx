import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" ref={ref} style={{
      background: '#0d0f11',
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Blueprint grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, #0d0f11 80%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}
          >
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
            <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
              Why Choose Us
            </span>
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(30px, 5vw, 64px)',
              color: '#F7F7F5',
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            WHY RTP<br /><span style={{ color: '#F97316' }}>CONSTRUCTION?</span>
          </motion.h2>
        </div>

        {/* Feature blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="why-grid">
          {siteConfig.whyChoose.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ backgroundColor: 'rgba(249,115,22,0.06)', borderColor: 'rgba(249,115,22,0.3)' }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 20,
                padding: '48px 36px',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 80,
                color: 'rgba(249,115,22,0.1)',
                lineHeight: 1,
                marginBottom: 24,
                letterSpacing: -2,
              }}>{item.id}</div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: 22,
                color: '#F7F7F5',
                letterSpacing: 0.5,
                marginBottom: 14,
                textTransform: 'uppercase',
              }}>{item.title}</h3>
              <p style={{ color: '#9aa0a6', fontSize: 14, lineHeight: 1.7 }}>{item.description}</p>
              <div style={{ height: 3, width: 40, background: '#F97316', borderRadius: 2, marginTop: 28 }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
