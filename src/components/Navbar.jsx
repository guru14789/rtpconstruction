import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { siteConfig } from '../config/siteData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getQuoteURL = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(250, 250, 249, 0.95)'
            : 'rgba(250, 250, 249, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'all 0.4s ease',
        }}
        role="navigation"
        aria-label="Главная навигация"
      >
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--nav-height)',
          padding: '0 var(--container-padding)',
        }}>
          {/* Logo */}
          <a href="#home" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: 'var(--color-text)',
          }} aria-label={`${siteConfig.company.name} - главная`}>
            <div style={{
              width: 40,
              height: 40,
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Home size={20} color="var(--color-bg)" />
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: -0.02,
              color: 'var(--color-text)',
            }}>
              {siteConfig.company.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }} className="desktop-nav" role="menubar">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                style={{
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-pill)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--color-text)'; e.target.style.background = 'var(--color-bg-alt)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--color-text-muted)'; e.target.style.background = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getQuoteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '12px 24px',
                fontSize: 15,
              }}
            >
              {siteConfig.hero.ctaText}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text)',
              cursor: 'pointer',
              display: 'none',
              padding: 8,
            }}
            className="hamburger-btn"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

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
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(250, 250, 249, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: 'var(--space-5) var(--container-padding)',
              borderBottom: '1px solid var(--color-border)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
          >
            {siteConfig.navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: 'var(--space-4) 0',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={getQuoteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'block',
                marginTop: 'var(--space-4)',
                textAlign: 'center',
                width: '100%',
              }}
            >
              {siteConfig.hero.ctaText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      </>
  );
}