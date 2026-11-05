import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Projects() {
  const { projects } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const carouselRef = useRef(null);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 
                       typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 4;
  const maxIndex = Math.max(0, projects.items.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  // Handle touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      const newMaxIndex = Math.max(0, projects.items.length - newItemsPerView);
      setCurrentIndex(prev => Math.min(prev, newMaxIndex));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg-alt)',
      }}
    >
      {/* Abstract background shapes */}
      <div className="abstract-shape abstract-shape-1" style={{ top: '-100px', right: '-100px', width: 400, height: 400, opacity: 0.04 }} aria-hidden="true" />
      <div className="abstract-shape abstract-shape-2" style={{ bottom: '10%', left: '-100px', width: 300, height: 300, opacity: 0.03 }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 0.1,
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-3)',
            }}>
              Реализованные проекты
            </span>
            <h2
              id="projects-heading"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: -0.03,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {projects.heading}
            </h2>
          </div>
          <a href="#catalog" className="btn btn-primary" style={{ alignSelf: 'flex-end' }}>
            {projects.ctaText}
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          {...fadeUp(0.2)}
          ref={carouselRef}
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-bg-alt)',
            padding: 'var(--space-6)',
            overflow: 'hidden',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-5)',
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform',
              touchAction: 'pan-y',
            }}
            role="list"
            aria-label="Каталог проектов"
          >
            <AnimatePresence mode="wait">
              {projects.items.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={cardVariants}
                  style={{
                    flex: `0 0 calc(${100 / itemsPerView}% - ${itemsPerView > 1 ? (itemsPerView - 1) * 20 / itemsPerView : 0}px)`,
                    minWidth: 280,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  role="listitem"
                >
                  {/* Project Card */}
                  <div style={{
                    position: 'relative',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px var(--color-shadow)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 48px var(--color-shadow-hover)';
                    e.currentTarget.style.borderColor = 'var(--color-border-dark)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px var(--color-shadow)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                    {/* Image */}
                    <div style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={project.imageUrl}
                        alt={`${project.title}, площадь ${project.area}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                        }}
                        loading="lazy"
                      />
                      {/* Gradient overlay for text readability */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(15,15,15,0.85) 0%, transparent 100%)',
                        pointerEvents: 'none',
                      }} />
                    </div>

                    {/* Overlay Content */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: 'var(--space-5)',
                      color: 'var(--color-bg)',
                      zIndex: 1,
                    }}>
                      <h3 style={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: -0.02,
                        marginBottom: 'var(--space-3)',
                      }}>
                        {project.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        flexWrap: 'wrap',
                        fontSize: 14,
                        fontWeight: 500,
                        opacity: 0.9,
                      }}>
                        <span>{project.area}</span>
                        <span style={{ color: 'rgba(247,247,245,0.6)' }}>·</span>
                        <span style={{ fontWeight: 700 }}>{project.price}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Carousel Navigation - Desktop */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-5)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            zIndex: 10,
          }} className="carousel-nav" aria-label="Навигация карусели">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Предыдущий проект"
              aria-disabled={currentIndex === 0}
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                opacity: currentIndex === 0 ? 0.4 : 1,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px var(--color-shadow)',
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.background = 'var(--color-bg-alt)';
                  e.currentTarget.style.borderColor = 'var(--color-border-dark)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-card)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            {/* Page indicators */}
            <div style={{ display: 'flex', gap: 8 }} role="tablist" aria-label="Страницы каталога">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Проект ${i + 1}`}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: i === currentIndex ? 'var(--color-accent)' : 'var(--color-border-dark)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="Следующий проект"
              aria-disabled={currentIndex >= maxIndex}
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                opacity: currentIndex >= maxIndex ? 0.4 : 1,
                cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px var(--color-shadow)',
              }}
              onMouseEnter={(e) => {
                if (currentIndex < maxIndex) {
                  e.currentTarget.style.background = 'var(--color-bg-alt)';
                  e.currentTarget.style.borderColor = 'var(--color-border-dark)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-card)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}