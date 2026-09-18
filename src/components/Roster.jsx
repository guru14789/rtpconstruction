import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function Roster() {
  const { roster } = siteConfig;

  return (
    <section
      id="roster"
      style={{
        position: 'relative',
        background: 'var(--ground-2)',
        padding: 'var(--space-10) 0',
        overflow: 'hidden',
      }}
      aria-labelledby="roster-heading"
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-8)' }}
        >
          <span className="label label-amber">
            {roster.label}
          </span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {roster.artists.map((artist, i) => (
            <motion.article
              key={artist.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'var(--space-6)',
                alignItems: 'center',
                padding: 'var(--space-5) 0',
                borderBottom: '1px solid var(--hairline)',
              }}
            >
              <span className="label" style={{ color: 'var(--amber)', whiteSpace: 'nowrap' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}>
                  {artist.name}
                </h3>
                <p style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--ink-2)',
                }}>
                  {artist.role}
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-6)',
                textAlign: 'right',
                fontSize: 13,
                color: 'var(--muted)',
              }}>
                <span>{artist.releases} release{artist.releases !== 1 ? 's' : ''}</span>
                <span>{artist.location}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}