import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, animate } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const CARD_WIDTH = 320;
const CARD_HEIGHT = 320;
const THROW_THRESHOLD = CARD_WIDTH * 0.15;

const overlayStyles = {
  amber: 'linear-gradient(180deg, transparent 60%, rgba(232,145,60,0.3) 100%)',
  teal: 'linear-gradient(180deg, transparent 60%, rgba(46,107,114,0.3) 100%)',
};

const cardData = [
  {
    id: 'AUR-004',
    title: 'Refraction',
    artist: 'Mara Lind',
    color: 'amber',
    format: '12" LP / Digital',
    date: '2024.03.15',
    genre: 'Ambient / Dub Techno',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
  },
  {
    id: 'AUR-003',
    title: 'Night Systems',
    artist: 'Kaelo',
    color: 'teal',
    format: '12" EP / Digital',
    date: '2023.11.03',
    genre: 'Deep House',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
  },
  {
    id: 'AUR-002',
    title: 'Slow Fade',
    artist: 'Vesper',
    color: 'amber',
    format: '10" EP / Digital',
    date: '2023.06.22',
    genre: 'Leftfield / Downtempo',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    id: 'AUR-001',
    title: 'First Light',
    artist: 'Axis One',
    color: 'teal',
    format: '12" LP / Digital',
    date: '2022.09.09',
    genre: 'Melodic Techno',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
  },
]

const overlayMap = {
  amber: 'linear-gradient(180deg, transparent 60%, rgba(232,145,60,0.3) 100%)',
  teal: 'linear-gradient(180deg, transparent 60%, rgba(46,107,114,0.3) 100%)',
};

const metaStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
  marginTop: 'var(--space-2)',
  paddingTop: 'var(--space-3)',
  borderTop: '1px solid var(--hairline)',
  fontSize: 11,
  color: 'var(--muted)',
};

function renderCard(card) {
  return (
    <div
      key={card.id}
      style={{
        flex: '0 0 320px',
        height: 400,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--ground-2)',
        border: '1px solid var(--hairline)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
        <img
          src={card.coverUrl}
          alt={card.artist + ' - ' + card.title + ' cover'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: overlayStyles[card.color],
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span className="label" style={{ color: card.color === 'amber' ? 'var(--amber)' : 'var(--teal)' }}>
          {card.id}
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          {card.title}
        </h3>
        <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-2)' }}>
          {card.artist}
        </p>
        <div style={metaStyle}>
          <span>{card.format}</span>
          <span>{card.date}</span>
          <span>{card.genre}</span>
        </div>
      </div>
    </div>
  );
}

export default function Releases() {
  const { releases } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragRotation, setDragRotation] = useState(0);
  const deckRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });

  const throwCard = useCallback((direction) => {
  }, []);

  const handlePointerDown = (e, index) => {
  };

  const handlePointerMove = (e) => {
  };

  const handlePointerUp = () => {
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
  }, []);

  return (
    <section
      id="releases"
      style={{
        position: 'relative',
        background: 'var(--ground)',
        padding: 'var(--space-10) 0',
        overflow: 'hidden',
      }}
      aria-labelledby="releases-heading"
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-10)',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label label-amber">
              {releases.label}
            </span>
            <h2
              id="releases-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                marginTop: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
              }}
            >
              {releases.headline.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              lineHeight: 1.7,
              color: 'var(--ink-2)',
              marginBottom: 'var(--space-8)',
              maxWidth: '28ch',
            }}>
              {releases.lede}
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <a href="#catalogue" className="btn btn-primary">
                {releases.ctaPrimary}
                <ChevronRight size={14} aria-hidden="true" />
              </a>
              <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                {releases.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <div
            ref={deckRef}
            style={{
              position: 'relative',
              width: CARD_WIDTH,
              height: CARD_HEIGHT + 80,
              justifySelf: 'end',
            }}
            role="region"
            aria-label="Release deck"
            tabIndex={0}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)',
                width: 2,
                height: '60px',
                background: 'var(--hairline)',
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '72px',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 8,
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: i <= activeIndex ? 1 : 0.6 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  style={{
                    width: i <= activeIndex ? 10 : 6,
                    height: i <= activeIndex ? 10 : 6,
                    borderRadius: '50%',
                    background: i === activeIndex ? 'var(--amber)' : 'var(--hairline)',
                  }}
                />
              ))}
            </motion.div>

            <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 20 }}>
              {cardData.map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}