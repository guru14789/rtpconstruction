import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="clients" ref={ref} style={{ background: '#101214', padding: '110px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}
          >
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
            <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
              Our Clients
            </span>
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#F7F7F5',
            }}
          >
            Trusted by Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: '#9aa0a6', fontSize: 16, marginTop: 12 }}
          >
            Strong relationships are the foundation of every successful project.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }} className="clients-grid">
          {siteConfig.clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: '36px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                cursor: 'pointer',
                transition: 'all 0.3s',
                minHeight: 120,
              }}
              className="client-card"
            >
              {/* Placeholder logo — replace with <img src={client.logo} /> when available */}
              <div style={{
                width: 56, height: 56,
                background: 'rgba(249,115,22,0.1)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 18, color: '#F97316' }}>
                  {client.name.split(' ')[0][0]}{client.name.split(' ').slice(-1)[0][0]}
                </span>
              </div>
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#9aa0a6',
                textAlign: 'center',
                letterSpacing: 1,
                transition: 'color 0.3s',
              }} className="client-name">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .clients-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .client-card:hover .client-name { color: #F97316 !important; }
        .client-card:hover { border-color: rgba(249,115,22,0.3) !important; background: rgba(249,115,22,0.05) !important; }
      `}</style>
    </section>
  );
}
