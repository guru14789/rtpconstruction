function initHeroScroll() {
  const container = document.getElementById('hero-scroll-container')
  const header = document.getElementById('hero-header')
  const card = document.getElementById('hero-card')
  if (!container || !header || !card) return

  let rafId = 0
  let ticking = false

  const updateTransform = () => {
    ticking = false
    const rect = container.getBoundingClientRect()
    const vh = window.innerHeight || 1
    const total = Math.max(1, rect.height - vh)
    const rawProgress = -rect.top / total
    const progress = Math.min(1, Math.max(0, rawProgress))

    const isMobile = window.innerWidth <= 768
    const startScale = isMobile ? 0.7 : 1.05
    const endScale = isMobile ? 0.9 : 1

    const rotate = 20 * (1 - progress)
    const scale = startScale + (endScale - startScale) * progress
    const translate = -100 * progress

    header.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`
    card.style.transform = `rotateX(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`
  }

  const onScroll = () => {
    if (!ticking) {
      ticking = true
      rafId = requestAnimationFrame(updateTransform)
    }
  }

  updateTransform()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })

  const video = document.getElementById('hero-video')
  if (video) {
    let loaded = false
    const loadVideo = () => {
      if (loaded) return
      loaded = true
      events.forEach((evt) => window.removeEventListener(evt, loadVideo))
      import('./components/da68d926f31eb7a2e977d2e69c23719d.mp4').then((mod) => {
        const src = document.createElement('source')
        src.src = mod.default
        src.type = 'video/mp4'
        video.insertBefore(src, video.firstChild)
        video.preload = 'metadata'
        video.load()
        video.play().catch(() => {})
      })
    }
    const events = ['scroll', 'pointermove', 'touchstart', 'keydown']
    events.forEach((evt) => window.addEventListener(evt, loadVideo, { once: true, passive: true }))
  }
}

initHeroScroll()

function mountWhenVisible(elementId, importFn) {
  const el = document.getElementById(elementId)
  if (!el) return

  let mounted = false
  const mount = () => {
    if (mounted) return
    mounted = true
    Promise.all([import('react'), import('react-dom/client'), importFn()]).then(
      ([ReactMod, ReactDOMMod, CompMod]) => {
        const React = ReactMod.default || ReactMod
        const { createRoot } = ReactDOMMod
        const Component = CompMod.default
        createRoot(el).render(React.createElement(React.StrictMode, null, React.createElement(Component)))
      },
    )
  }

  if (window.location.hash === '#projects' || window.location.hash === '#testimonials') {
    mount()
    return
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          mount()
        }
      },
      { rootMargin: '350px 0px' },
    )
    io.observe(el)
  } else {
    mount()
  }
}

mountWhenVisible('react-projects-root', () => import('./components/EloResultsSection'))
mountWhenVisible('react-testimonials-root', () => import('./components/Testimonials'))
