import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function WhatsAppBot() {
  const [tooltip, setTooltip] = useState(false);
  const waURL = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`;

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: 72,
              right: 0,
              background: '#1a1d20',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              padding: '12px 20px',
              whiteSpace: 'nowrap',
              color: '#F7F7F5',
              fontSize: 14,
              fontWeight: 600,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <span>💬 Chat with RTP Construction</span>
            <div style={{
              position: 'absolute',
              bottom: -6,
              right: 24,
              width: 12,
              height: 12,
              background: '#1a1d20',
              transform: 'rotate(45deg)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderTop: 'none',
              borderLeft: 'none',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={waURL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
      >
        {/* "Chat with us" label - desktop only */}
        <div style={{
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
        }} className="wa-label">
          <span style={{ color: '#25D366', fontSize: 16 }}>●</span>
          Chat with us
        </div>

        {/* Pulsing WhatsApp button */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            style={{
              position: 'absolute', inset: 0,
              background: '#25D366',
              borderRadius: '50%',
            }}
          />
          <div style={{
            width: 56, height: 56,
            background: '#25D366',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            position: 'relative',
            zIndex: 1,
          }}>
            <MessageCircle size={26} color="#fff" fill="#fff" />
          </div>
        </motion.div>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .wa-label { display: none !important; }
        }
      `}</style>
    </div>
  );
}
