import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ maxWidth: 500, marginBottom: '96px' }}
        >
          <span className="label label-dot" style={{ color: 'var(--color-text-muted)' }}>
            {services.label}
          </span>
          <h2
            id="services-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-black)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            {services.heading}
          </h2>
          <p style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 1.7,
            color: 'var(--color-text-muted)',
          }}>
            {services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}>
          {services.items.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'relative',
                background: 'var(--color-white)',
                overflow: 'hidden',
              }}
            >
              {/* Service Image */}
              <div style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
              }}>
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />
              </div>

              {/* Service Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '32px',
                zIndex: 1,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 800,
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {service.number}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-white)',
                    textTransform: 'uppercase',
                  }}>
                    {service.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: 'clamp(12px, 1.1vw, 14px)',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: '20px',
                  maxWidth: 380,
                }}>
                  {service.description}
                </p>
                <a href="#contact" className="link-arrow" style={{ color: 'var(--color-white)' }} aria-label={`Learn more about ${service.title}`}>
                  Learn More
                  <ChevronRight size={14} aria-hidden="true" />
                </a>
              </div>

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  background: 'transparent',
                  transition: 'background 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(5,5,5,0.3)';
                  e.currentTarget.querySelector('img') && (e.currentTarget.querySelector('img').style.transform = 'scale(1.05)');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.querySelector('img') && (e.currentTarget.querySelector('img').style.transform = 'scale(1)');
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            marginTop: '80px',
            textAlign: 'center',
          }}
        >
          <a href="#contact" className="btn btn-black" style={{
            padding: '14px 40px',
            fontSize: 12,
            minWidth: 200,
          }}>
            VIEW ALL SERVICES
            <ChevronRight size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}