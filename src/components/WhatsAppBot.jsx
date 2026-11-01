import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function WhatsAppBot() {
  const waURL = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`;

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
      <a
        href={waURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RTP CONSTRUCTION on WhatsApp"
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
      >
        {/* Label: always visible (compact on mobile) */}
        <div
          className="wa-label"
          style={{
            background: '#1a1d20',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: '10px 18px',
            color: '#F7F7F5',
            fontSize: 13,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <span style={{ color: '#25D366', fontSize: 16 }} aria-hidden="true">●</span>
          Chat with us
        </div>

        <div style={{ position: 'relative', width: 56, height: 56 }}>
          {/* Pulse ring (independent of the button so scales don't compound) */}
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            style={{
              position: 'absolute', inset: 0,
              background: '#25D366',
              borderRadius: '50%',
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{
              width: 56, height: 56,
              background: '#25D366',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <MessageCircle size={26} color="#fff" fill="#fff" />
          </motion.div>
        </div>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .wa-label { padding: 8px 12px !important; font-size: 12px !important; }
        }
        @media (max-width: 380px) {
          .wa-label { display: none !important; }
        }
      `}</style>
    </div>
  );
}
