"use client";
import React, { useRef, useEffect } from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const updateTransform = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = Math.max(1, rect.height - vh);
      const rawProgress = -rect.top / total;
      const progress = Math.min(1, Math.max(0, rawProgress));

      const isMobile = window.innerWidth <= 768;
      const startScale = isMobile ? 0.7 : 1.05;
      const endScale = isMobile ? 0.9 : 1;

      const rotate = 20 * (1 - progress);
      const scale = startScale + (endScale - startScale) * progress;
      const translate = -100 * progress;

      if (headerRef.current) {
        headerRef.current.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
      }
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(updateTransform);
      }
    };

    updateTransform();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="h-[40rem] sm:h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={headerRef}
          style={{
            margin: "0 auto",
            textAlign: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            willChange: "transform",
          }}
          className="max-w-5xl mx-auto text-center"
        >
          {titleComponent}
        </div>
        <div
          ref={cardRef}
          style={{
            transform: "rotateX(20deg) scale(1.05)",
            margin: "-3rem auto 0 auto",
            width: "100%",
            maxWidth: "none",
            willChange: "transform",
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          className="h-[25rem] sm:h-[40rem] md:h-[55rem] rounded-2xl md:rounded-3xl border-t-2 border-white/20 bg-[#121212] overflow-hidden"
        >
          <div className="h-full w-full overflow-hidden bg-zinc-900">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
