import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function Footer() {
  const { company, navLinks } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        background: 'var(--color-charcoal)',
        color: 'rgba(255,255,255,0.7)',
        padding: '80px 0 40px',
        overflow: 'hidden',
      }}
      role="contentinfo"
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '64px',
          marginBottom: '64px',
        }}>
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#home" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              color: 'var(--color-white)',
              marginBottom: '24px',
            }} aria-label={`${company.name} - Home`}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 13,
                  color: 'var(--color-black)',
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
                color: 'var(--color-white)',
              }}>
                {company.name}
              </span>
            </a>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 280,
            }}>
              {company.description}
            </p>
          </motion.div>

          {/* Navigation Columns */}
          {[
            { title: 'Company', links: navLinks.slice(0, 2) },
            { title: 'Services', links: [
              { label: 'Residential', href: '#services' },
              { label: 'Commercial', href: '#services' },
              { label: 'Interior Design', href: '#services' },
              { label: 'Project Management', href: '#services' },
            ]},
            { title: 'Connect', links: [
              { label: 'Contact Us', href: '#contact' },
              { label: 'Instagram', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Twitter', href: '#' },
            ]},
          ].map((col, colIndex) => (
            <motion.nav
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + colIndex * 0.08 }}
              aria-label={col.title}
            >
              <h4 style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.15,
                textTransform: 'uppercase',
                color: 'var(--color-white)',
                marginBottom: '20px',
              }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-white)'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: 'rgba(255,255,255,0.1)',
          marginBottom: '32px',
        }} />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
          }}>
            © {currentYear} {company.name}. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '32px',
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
          }}>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.4)',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >
              Privacy Policy
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.4)',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >
              Terms of Use
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}