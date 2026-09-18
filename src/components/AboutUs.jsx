import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Clock } from 'lucide-react';

const features = [
  { id: '01', title: 'Quality First', icon: Award, desc: 'Uncompromising standards in every structure we build.' },
  { id: '02', title: 'Safety Driven', icon: ShieldCheck, desc: 'Safety protocols adhered to at every stage of construction.' },
  { id: '03', title: 'On-Time Delivery', icon: Clock, desc: 'Committed to schedules without sacrificing quality.' },
];

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ background: '#101214', padding: '110px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '4/5',
              position: 'relative',
            }}>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="RTP Construction project"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(16,18,20,0.6) 0%, transparent 60%)',
              }} />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              style={{
                position: 'absolute',
                bottom: 32,
                right: -24,
                background: '#F97316',
                borderRadius: 16,
                padding: '20px 24px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(249,115,22,0.4)',
              }}
            >
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 36, color: '#101214', lineHeight: 1 }}>15+</div>
              <div style={{ color: '#101214', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>YEARS</div>
            </motion.div>
            {/* Orange border accent */}
            <div style={{
              position: 'absolute',
              top: -16, left: -16,
              right: 16, bottom: 16,
              border: '2px solid rgba(249,115,22,0.25)',
              borderRadius: 28,
              pointerEvents: 'none',
            }} />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
            >
              <div style={{ height: 2, width: 32, background: '#F97316' }} />
              <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: '#F7F7F5',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Building with Purpose.<br />
              <span style={{ color: '#F97316' }}>Delivering</span> with Precision.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ color: '#9aa0a6', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}
            >
              RTP Construction is committed to delivering high-quality construction solutions through strong engineering practices, skilled professionals and disciplined project execution.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ color: '#9aa0a6', fontSize: 16, lineHeight: 1.8, marginBottom: 44 }}
            >
              From residential homes to large commercial complexes, we bring quality materials, engineering excellence, and timely delivery to every project — fostering long-term relationships built on trust and client satisfaction.
            </motion.p>

            {/* Feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 44 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '20px 24px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    transition: 'all 0.25s',
                    cursor: 'default',
                  }}
                  whileHover={{ borderColor: 'rgba(249,115,22,0.3)', backgroundColor: 'rgba(249,115,22,0.04)' }}
                >
                  <div style={{
                    width: 44, height: 44, minWidth: 44,
                    background: 'rgba(249,115,22,0.12)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <f.icon size={20} color="#F97316" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 15, color: '#F7F7F5', marginBottom: 4 }}>
                      <span style={{ color: '#F97316', marginRight: 8, fontSize: 12 }}>{f.id}</span>{f.title}
                    </div>
                    <div style={{ color: '#9aa0a6', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#F97316',
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                letterSpacing: 0.5,
                transition: 'gap 0.2s',
              }}
              whileHover={{ gap: 16 }}
            >
              Learn More About Us <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
        }
      `}</style>
    </section>
  );
}
