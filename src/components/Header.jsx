import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--header-height)',
          background: scrolled
            ? 'rgba(247, 247, 245, 0.92)'
            : 'transparent',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'all 0.4s ease',
        }}
        role="banner"
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          {/* Logo */}
          <a href="#home" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: 'var(--color-black)',
          }} aria-label={`${siteConfig.company.name} - Home`}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--color-black)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 13,
                color: 'var(--color-white)',
                letterSpacing: -0.02,
              }}>
                O
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: -0.02,
              color: 'var(--color-black)',
            }}>
              {siteConfig.company.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }} aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--color-black)',
                  textDecoration: 'none',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 0.05,
                  textTransform: 'uppercase',
                  transition: 'opacity 0.2s ease',
                  opacity: 0.7,
                }}
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0.7}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Contact Area */}
          <div className="header-contact" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <button
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--color-light-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-black)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-black)';
                e.currentTarget.style.color = 'var(--color-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-light-gray)';
                e.currentTarget.style.color = 'var(--color-black)';
              }}
              aria-label="Call us"
            >
              <Phone size={18} aria-hidden="true" />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              <span style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 0.1,
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                Phone Us
              </span>
              <a href={`tel:${siteConfig.company.phone.replace(/\D/g, '')}`} style={{
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--color-black)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-text-muted)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-black)'}
              >
                {siteConfig.company.phone}
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--color-black)',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'var(--color-white)',
              borderBottom: '1px solid var(--color-border)',
              padding: '32px 24px',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-black)',
                    textDecoration: 'none',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
              <a href={`tel:${siteConfig.company.phone.replace(/\D/g, '')}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--color-black)',
              }}>
                <Phone size={20} aria-hidden="true" />
                {siteConfig.company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .header-contact { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}