import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  padding: '14px 18px',
  color: '#F7F7F5',
  fontSize: 15,
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const projectTypes = [
  'Residential Construction', 'Commercial Construction', 'Industrial Construction',
  'Civil Engineering', 'Renovation & Remodeling', 'Project Management', 'Other',
];

export default function ContactUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name:'',company:'',phone:'',email:'',projectType:'',location:'',budget:'',message:'' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Please describe your project.';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); setStatus('error'); return; }
    // Simulate submission (replace with real backend)
    setStatus('success');
    setForm({ name:'',company:'',phone:'',email:'',projectType:'',location:'',budget:'',message:'' });
  };

  const contact = siteConfig.company;

  return (
    <section id="contact" ref={ref} style={{ background: '#101214', padding: '110px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}
          >
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
            <span style={{ color: '#F97316', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
              Contact Us
            </span>
            <div style={{ height: 2, width: 32, background: '#F97316' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 50px)', color: '#F7F7F5' }}
          >
            Contact RTP Construction
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60 }} className="contact-grid">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 26, color: '#F7F7F5', marginBottom: 32 }}>
              Get In Touch
            </h3>

            {[
              { icon: MapPin, label: 'Address', value: contact.address },
              { icon: Phone, label: 'Phone', value: contact.phone },
              { icon: Mail, label: 'Email', value: contact.email },
              { icon: Clock, label: 'Business Hours', value: contact.businessHours },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{ display: 'flex', gap: 16, marginBottom: 28 }}
              >
                <div style={{
                  width: 48, height: 48, minWidth: 48,
                  background: 'rgba(249,115,22,0.1)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={20} color="#F97316" />
                </div>
                <div>
                  <div style={{ color: '#555B60', fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ color: '#E8E8E5', fontSize: 15, lineHeight: 1.6 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div style={{
              marginTop: 32,
              borderRadius: 16,
              overflow: 'hidden',
              height: 200,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 8,
            }}>
              <MapPin size={32} color="#F97316" />
              <span style={{ color: '#9aa0a6', fontSize: 14 }}>Map coming soon</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(37,211,102,0.07)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  borderRadius: 20,
                  padding: '60px 40px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={56} color="#25D366" style={{ marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 26, color: '#F7F7F5', marginBottom: 12 }}>
                  Enquiry Submitted!
                </h3>
                <p style={{ color: '#9aa0a6', fontSize: 16, lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  style={{ marginTop: 28, background: '#F97316', color: '#101214', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === 'error' && Object.keys(errors).length > 0 && (
                  <div style={{
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    borderRadius: 10,
                    padding: '14px 18px',
                    marginBottom: 24,
                    color: '#f87171',
                    fontSize: 14,
                  }}>
                    <AlertCircle size={18} style={{ minWidth: 18, marginTop: 1 }} />
                    Please fix the highlighted errors.
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-grid">
                  {[
                    { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                    { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company (optional)' },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{ display: 'block', color: '#9aa0a6', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        style={{
                          ...inputStyle,
                          borderColor: errors[field.name] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)',
                        }}
                        onFocus={e => e.target.style.borderColor = '#F97316'}
                        onBlur={e => e.target.style.borderColor = errors[field.name] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}
                      />
                      {errors[field.name] && <span style={{ color: '#f87171', fontSize: 12, marginTop: 4, display: 'block' }}>{errors[field.name]}</span>}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-grid">
                  <div>
                    <label style={{ display: 'block', color: '#9aa0a6', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: '#1a1d20' }}>Select project type</option>
                      {projectTypes.map(pt => (
                        <option key={pt} value={pt} style={{ background: '#1a1d20' }}>{pt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#9aa0a6', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
                      Project Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#F97316'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', color: '#9aa0a6', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" style={{ background: '#1a1d20' }}>Select estimated budget</option>
                    {['Below ₹10 Lakhs', '₹10L – ₹50L', '₹50L – ₹1 Crore', '₹1Cr – ₹5Cr', 'Above ₹5 Crore', 'Not Decided'].map(b => (
                      <option key={b} value={b} style={{ background: '#1a1d20' }}>{b}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', color: '#9aa0a6', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
                    Message / Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, requirements and timeline..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      borderColor: errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => e.target.style.borderColor = '#F97316'}
                    onBlur={e => e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}
                  />
                  {errors.message && <span style={{ color: '#f87171', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    background: '#F97316',
                    color: '#101214',
                    border: 'none',
                    borderRadius: 10,
                    padding: '18px 32px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: 16,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#ea6c0e'}
                  onMouseLeave={e => e.currentTarget.style.background = '#F97316'}
                >
                  Submit Enquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
