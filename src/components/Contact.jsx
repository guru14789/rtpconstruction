import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const iconComponents = { Mail, Phone, MapPin, Send };

const Icon = ({ name, size = 20, color = 'currentColor', ...props }) => {
  const Component = iconComponents[name];
  if (Component) return <Component size={size} color={color} {...props} />;

  // Social media icons as inline SVGs
  switch (name) {
    case 'Instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'Linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'Twitter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    case 'Behance':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M12 18v-6l4-2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Contact() {
  const { contact } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const Input = ({ name, label, type = 'text', required, options, children }) => (
    <div style={{ marginBottom: '24px' }}>
      <label htmlFor={name} style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 0.1,
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        marginBottom: '8px',
      }}>
        {label} {required && <span style={{ color: 'var(--color-black)' }}>*</span>}
      </label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          style={{
            width: '100%',
            padding: '14px 16px',
            fontSize: 15,
            fontFamily: 'var(--font-body)',
            color: 'var(--color-black)',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            outline: 'none',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
        >
          <option value="" disabled>Select project type</option>
          {options?.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          rows={6}
          style={{
            width: '100%',
            padding: '14px 16px',
            fontSize: 15,
            fontFamily: 'var(--font-body)',
            color: 'var(--color-black)',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            outline: 'none',
            resize: 'vertical',
            minHeight: 140,
            transition: 'border-color 0.2s ease',
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          style={{
            width: '100%',
            padding: '14px 16px',
            fontSize: 15,
            fontFamily: 'var(--font-body)',
            color: 'var(--color-black)',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
        />
      )}
    </div>
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section"
      style={{
        position: 'relative',
        background: 'var(--color-white)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'start',
        }}>
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ maxWidth: 540 }}
          >
            <span className="label label-dot" style={{ color: 'var(--color-text-muted)' }}>
              {contact.label}
            </span>
            <h2
              id="contact-heading"
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
              {contact.heading}
            </h2>
            <p style={{
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              lineHeight: 1.7,
              color: 'var(--color-text-muted)',
              marginBottom: '48px',
            }}>
              {contact.description}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  padding: '48px',
                  textAlign: 'center',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'var(--color-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <Icon name="Send" size={24} color="var(--color-white)" aria-hidden="true" />
                </div>
                <h3 style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--color-black)',
                  marginBottom: '12px',
                }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <Input
                  name="name"
                  label="Full Name"
                  type="text"
                  required
                />
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                />
                <Input
                  name="project"
                  label="Project Type"
                  type="select"
                  options={contact.formFields.find(f => f.name === 'project')?.options}
                  required
                />
                <Input
                  name="message"
                  label="Project Details"
                  type="textarea"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-black"
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    fontSize: 12,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                >
                  SEND MESSAGE
                  <Icon name="Send" size={14} aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Contact Details */}
            <div style={{
              marginBottom: '80px',
            }}>
              {contact.info.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    marginBottom: '40px',
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--color-light-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-black)',
                  }}>
                    <Icon name={item.icon} size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{
                      display: 'block',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 0.1,
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}>
                      {item.label}
                    </span>
                    <a href={item.href} style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--color-black)',
                      lineHeight: 1.6,
                      transition: 'color 0.2s ease',
                    }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-text-muted)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-black)'}
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <span style={{
                display: 'block',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.1,
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '20px',
              }}>
                Follow Us
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                {contact.social.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                    style={{
                      width: 44,
                      height: 44,
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
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}