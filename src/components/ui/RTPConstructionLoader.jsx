import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './RTPConstructionLoader.css';

/**
 * RTP CONSTRUCTION PRELOADER (Minimal Professional Architectural Version)
 */
export function RTPConstructionLoader({ onComplete, duration = 2600 }) {
  const [stage, setStage] = useState('active');
  const [progress, setProgress] = useState(0);
  const [isResolved, setIsResolved] = useState(false);
  const [keystoneSnapped, setKeystoneSnapped] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('rtp-loading');

    if (prefersReducedMotion) {
      setProgress(100);
      setKeystoneSnapped(true);
      setIsResolved(true);
      const exitTimer = setTimeout(() => {
        setStage('exiting');
        document.body.classList.remove('rtp-loading');
      }, 500);

      const hideTimer = setTimeout(() => {
        setStage('hidden');
        if (typeof onComplete === 'function') onComplete();
      }, 800);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
        document.body.classList.remove('rtp-loading');
      };
    }

    const startTime = performance.now();
    let animId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed > 1200 && !keystoneSnapped) {
        setKeystoneSnapped(true);
      }

      if (elapsed >= duration - 450 && !isResolved) {
        setIsResolved(true);
      }

      if (elapsed < duration) {
        animId = requestAnimationFrame(tick);
      } else {
        setStage('exiting');
        setTimeout(() => {
          document.body.classList.remove('rtp-loading');
          setStage('hidden');
          if (typeof onComplete === 'function') onComplete();
        }, 350);
      }
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('rtp-loading');
    };
  }, [duration, onComplete, keystoneSnapped, isResolved]);

  if (stage === 'hidden') return null;

  const content = (
    <div 
      id="rtp-preloader"
      className={stage === 'exiting' ? 'is-exiting' : ''}
      role="progressbar" 
      aria-valuenow={progress} 
      aria-valuemin="0" 
      aria-valuemax="100" 
      aria-label="Loading RTP Construction"
    >
      <div className="rtp-curtain rtp-curtain-top"></div>
      <div className="rtp-curtain rtp-curtain-bottom"></div>
      <div className="rtp-blueprint-bg"></div>
      <div className="rtp-vignette"></div>

      <div className={`rtp-stage ${isResolved ? 'resolved' : ''}`}>
        <div className="rtp-svg-wrap">
          <svg className="rtp-svg" viewBox="0 0 500 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            
            {/* R Drafting Lines */}
            <line className="rtp-line-main rtp-line-draw rtp-seg-1" x1="50" y1="145" x2="50" y2="15" />
            <path className="rtp-line-main rtp-line-draw rtp-seg-2" d="M 50 20 L 110 20 C 135 20, 135 75, 110 75 L 50 75" />
            <line className="rtp-line-main rtp-line-draw rtp-seg-3" x1="75" y1="75" x2="125" y2="140" />

            {/* T Drafting Lines + Keystone */}
            <line className="rtp-line-main rtp-line-draw rtp-seg-4" x1="250" y1="145" x2="250" y2="15" />
            <line className="rtp-line-main rtp-line-draw rtp-seg-5" x1="250" y1="20" x2="190" y2="20" />
            <line className={`rtp-line-main rtp-keystone-target ${keystoneSnapped ? 'is-snapped' : ''}`} x1="250" y1="20" x2="310" y2="20" strokeWidth="4" />

            {/* P Drafting Lines */}
            <line className="rtp-line-main rtp-line-draw rtp-seg-6" x1="370" y1="145" x2="370" y2="15" />
            <path className="rtp-line-main rtp-line-draw rtp-seg-7" d="M 370 20 L 430 20 C 455 20, 455 80, 430 80 L 370 80" />
            <line className="rtp-line-cyan rtp-line-draw rtp-seg-8" x1="370" y1="20" x2="430" y2="80" strokeDasharray="3 3" opacity="0.75" />

            {/* Precision Joint Dots */}
            <circle className="rtp-node-outer" cx="50" cy="20" r="3.5" />
            <circle className="rtp-node-inner" cx="50" cy="20" r="2" />
            <circle className="rtp-node-outer" cx="50" cy="75" r="3.5" />
            <circle className="rtp-node-inner" cx="50" cy="75" r="2" />
            <circle className="rtp-node-outer" cx="50" cy="140" r="3.5" />
            <circle className="rtp-node-inner" cx="50" cy="140" r="2" />
            <circle className="rtp-node-outer" cx="250" cy="140" r="3.5" />
            <circle className="rtp-node-inner" cx="250" cy="140" r="2" />
            <circle className="rtp-node-outer" cx="250" cy="20" r="3.5" />
            <circle className="rtp-node-inner" cx="250" cy="20" r="2" />
            <circle className="rtp-node-outer" cx="370" cy="20" r="3.5" />
            <circle className="rtp-node-inner" cx="370" cy="20" r="2" />
            <circle className="rtp-node-outer" cx="370" cy="140" r="3.5" />
            <circle className="rtp-node-inner" cx="370" cy="140" r="2" />
          </svg>
        </div>

        <div className="rtp-lockup">
          <div className="rtp-wordmark-main">RTP<span className="rtp-wordmark-dot">.</span></div>
          <div className="rtp-divider-line"></div>
          <div className="rtp-wordmark-sub">CONSTRUCTION</div>
          <div className="rtp-tagline">BUILDING SINCE 2008</div>
        </div>

        <div className="rtp-counter-wrap">
          <span>{progress}</span>%
        </div>
      </div>

      <div className="rtp-progress-bar-container">
        <div className="rtp-progress-bar-fill" style={{ transform: `scaleX(${progress / 100})` }}></div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined' && document.body) {
    return ReactDOM.createPortal(content, document.body);
  }

  return content;
}

export default RTPConstructionLoader;
