import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReelTestimonials } from './ui/scroll-reel-testimonials';

const TESTIMONIALS = [
  {
    quote: "RTP CONSTRUCTION transformed our architectural vision into a structural masterpiece. Supreme craftsmanship!",
    author: "Jan Dittrich — Architect, Urban Living",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Jan Dittrich",
  },
  {
    quote: "Building our 45,000 sq ft headquarters was seamless. Their engineering precision and timeline adherence are unmatched.",
    author: "Michael Riddering — VP Infrastructure, Apex",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Michael Riddering",
  },
  {
    quote: "The level of luxury finishing delivered for our residential villa exceeded every expectation. True industry leaders.",
    author: "James Traf — Private Estate Owner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of James Traf",
  },
  {
    quote: "From initial structural engineering to final handover, working with RTP CONSTRUCTION was a seamless masterclass.",
    author: "Sophia Chen — Head of Design, Horizon",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Sophia Chen",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#0A0C0E', padding: '110px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}
        >
          <div style={{ height: 2, width: 32, background: '#E8913C' }} />
          <span style={{ color: '#E8913C', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
            Client Endorsements
          </span>
          <div style={{ height: 2, width: 32, background: '#E8913C' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 48px)',
            color: '#EDE7DC',
            marginBottom: 48,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="w-full flex justify-center">
          <ScrollReelTestimonials 
            testimonials={TESTIMONIALS} 
            className="border-white/10 bg-[#101317] text-[#EDE7DC]"
          />
        </div>
      </div>
    </section>
  );
}
