import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export default function Dates() {
  const { dates } = siteConfig;

  return (
    <section
      id="dates"
      style={{
        position: 'relative',
        background: 'var(--ground)',
        padding: 'var(--space-10) 0',
        overflow: 'hidden',
      }}
      aria-labelledby="dates-heading"
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
            {dates.label}
          </span>
        </motion.div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
          }} role="table">
            <thead>
              <tr style={{
                borderBottom: '1px solid var(--hairline)',
              }}>
                {dates.headers.map((header, i) => (
                  <th
                    key={header}
                    scope="col"
                    style={{
                      padding: 'var(--space-4) var(--space-3)',
                      textAlign: i === 0 ? 'left' : i === dates.headers.length - 1 ? 'right' : 'left',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: 10.5,
                      letterSpacing: 0.15,
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.rows.map((row, i) => (
                <motion.tr
                  key={`${row.date}-${row.artist}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderBottom: '1px solid var(--hairline)',
                    transition: 'background 0.2s ease',
                  }}
                >
                  <td style={{
                    padding: 'var(--space-4) var(--space-3)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 1.8vw, 18px)',
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                  }}>
                    {row.date}
                  </td>
                  <td style={{
                    padding: 'var(--space-4) var(--space-3)',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                  }}>
                    {row.artist}
                  </td>
                  <td style={{
                    padding: 'var(--space-4) var(--space-3)',
                    color: 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {row.venue}
                  </td>
                  <td style={{
                    padding: 'var(--space-4) var(--space-3)',
                    color: 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {row.city}
                  </td>
                  <td style={{
                    padding: 'var(--space-4) var(--space-3)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 10.5,
                      fontWeight: 600,
                      letterSpacing: 0.1,
                      textTransform: 'uppercase',
                      background: row.status === 'Sold Out' ? 'rgba(232,145,60,0.15)' :
                                  row.status === 'On Sale' ? 'rgba(46,107,114,0.15)' :
                                  'rgba(237,231,220,0.05)',
                      color: row.status === 'Sold Out' ? 'var(--amber)' :
                             row.status === 'On Sale' ? 'var(--teal)' :
                             'var(--muted)',
                      border: '1px solid ' + (row.status === 'Sold Out' ? 'rgba(232,145,60,0.3)' :
                                             row.status === 'On Sale' ? 'rgba(46,107,114,0.3)' :
                                             'var(--hairline)'),
                    }}>
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}