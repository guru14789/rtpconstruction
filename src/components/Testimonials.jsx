import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const testimonials = siteConfig.testimonials;

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section ref={ref} style={{ background: '#0d0f11', padding: '110px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}
        >
          <div style={{ height: 2, width: 32, background: '#F97316' }} />
          <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
            Testimonials
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
            fontSize: 'clamp(26px, 4vw, 46px)',
            color: '#F7F7F5',
            marginBottom: 60,
          }}
        >
          What Our Clients Say
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 24,
              padding: '60px 52px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 32, left: 40,
                width: 56, height: 56,
                background: 'rgba(249,115,22,0.1)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Quote size={24} color="#F97316" />
              </div>

              <p style={{
                color: '#E8E8E5',
                fontSize: 20,
                lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: 40,
                marginTop: 40,
              }}>
                "{testimonials[active].text}"
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'linear-gradient(135deg, #F97316, #fba565)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 8,
                }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 18, color: '#101214' }}>
                    {testimonials[active].author[0]}
                  </span>
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 17, color: '#F7F7F5' }}>
                  {testimonials[active].author}
                </div>
                <div style={{ color: '#F97316', fontSize: 13, fontWeight: 500 }}>
                  {testimonials[active].role}, {testimonials[active].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 36 }}>
          <button
            onClick={prev}
            style={{
              width: 48, height: 48,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#F7F7F5',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.borderColor = '#F97316'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? '#F97316' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 48, height: 48,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#F7F7F5',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.borderColor = '#F97316'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
