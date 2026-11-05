import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { label, nav } = siteConfig;

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled
            ? 'rgba(10, 12, 14, 0.95)'
            : 'rgba(10, 12, 14, 0.85)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <a href="#home" className="nav-brand" aria-label={`${label.name} - Home`}>
            {label.name}
            <span className="period">.</span>
          </a>

          <div className="nav-links desktop-nav">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              {nav.cta}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              cursor: 'pointer',
              padding: 8,
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

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
              background: 'rgba(16, 19, 23, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--hairline)',
              padding: 'var(--space-6) var(--container-padding)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {nav.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    padding: 'var(--space-3) 0',
                    borderBottom: '1px solid var(--hairline)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" className="btn btn-primary" style={{
                marginTop: 'var(--space-4)',
                textAlign: 'center',
                width: '100%',
              }}>
                {nav.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}