import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const waURL = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`;

  return (
    <section ref={ref} style={{ position: 'relative', padding: '120px 0', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1590644365607-be08ccf9bc5c?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(16,18,20,0.88)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}
        >
          <div style={{ height: 2, width: 32, background: '#F97316' }} />
          <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
            Start Your Project
          </span>
          <div style={{ height: 2, width: 32, background: '#F97316' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: '#F7F7F5',
            lineHeight: 1.05,
            letterSpacing: -1,
            marginBottom: 20,
          }}
        >
          LET'S BUILD<br /><span style={{ color: '#F97316' }}>SOMETHING GREAT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: '#9aa0a6', fontSize: 18, marginBottom: 48 }}
        >
          Have a construction project in mind? Talk to our team today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F97316',
            color: '#101214',
            padding: '16px 36px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: 'none',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <FileText size={18} /> Request a Quote
          </a>

          <a href={waURL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#25D366',
            color: '#fff',
            padding: '16px 36px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: 'none',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
