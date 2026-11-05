import React from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import { HeroScrollDemo } from './components/ui/demo'
import LoadingFillText from './components/ui/motion-loading-fill-text'
import Testimonials from './components/Testimonials'
import EloResultsSection from './components/EloResultsSection'

const heroRoot = document.getElementById('react-hero-root');
if (heroRoot) {
  createRoot(heroRoot).render(
    <React.StrictMode>
      <LoadingFillText />
      <HeroScrollDemo />
    </React.StrictMode>,
  )
}

const projectsRoot = document.getElementById('react-projects-root');
if (projectsRoot) {
  createRoot(projectsRoot).render(
    <React.StrictMode>
      <EloResultsSection />
    </React.StrictMode>,
  )
}

const testimonialsRoot = document.getElementById('react-testimonials-root');
if (testimonialsRoot) {
  createRoot(testimonialsRoot).render(
    <React.StrictMode>
      <Testimonials />
    </React.StrictMode>,
  )
}

