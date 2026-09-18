import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return ref;
};

export const useCountUp = (target, duration = 2000, start = false) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!start) return;
    const el = ref.current;
    if (!el) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return ref;
};
