import React from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import { HeroScrollDemo } from './components/ui/demo'

const heroRoot = document.getElementById('react-hero-root');
if (heroRoot) {
  createRoot(heroRoot).render(
    <React.StrictMode>
      <HeroScrollDemo />
    </React.StrictMode>,
  )
}
