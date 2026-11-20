"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./container-scroll-animation";
import heroVideo from "../da68d926f31eb7a2e977d2e69c23719d.mp4";

export function HeroScrollDemo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const triggerLoad = () => {
      setLoadVideo(true);
    };
    const events = ["scroll", "pointermove", "touchstart", "keydown"] as const;
    events.forEach((evt) =>
      window.addEventListener(evt, triggerLoad, { once: true, passive: true })
    );
    return () => {
      events.forEach((evt) => window.removeEventListener(evt, triggerLoad));
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden w-full bg-[#121212]">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-10 mt-10 md:mt-0">
            <span
              style={{
                color: "#ff7a1a",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Welcome
            </span>
            <h1 className="text-4xl md:text-[5rem] font-bold text-white uppercase tracking-tighter leading-none">
              RTP CONSTRUCTION
            </h1>
          </div>
        }
      >
        <div className="relative w-full h-full flex flex-col justify-end overflow-hidden bg-black">
          <img
            src="/arix_hero.webp"
            alt="RTP Construction modern architectural building"
            fetchPriority="high"
            decoding="async"
            width={1376}
            height={768}
            className="absolute inset-0 z-0 w-full h-full object-cover"
          />

          {/* Custom Background Video inside the tilting card */}
          <video
            autoPlay={loadVideo}
            loop
            muted
            playsInline
            preload={loadVideo ? "metadata" : "none"}
            poster="/arix_hero.webp"
            aria-label="RTP Construction architectural showcase video"
            className="absolute inset-0 z-0 w-full h-full object-cover"
          >
            {loadVideo && (
              <>
                <source src={heroVideo} type="video/mp4" />
                <source src="/hero-video.mp4" type="video/mp4" />
              </>
            )}
            <track
              kind="captions"
              src="/captions.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.85))",
            }}
          />

          {/* Content matching the original hero */}
          <div className="container relative z-20 h-full flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end pb-12 sm:pb-16 md:pb-24">
            <div className="mt-auto">
              <p
                style={{
                  color: "white",
                  fontSize: "clamp(24px, 5vw, 60px)",
                  lineHeight: "1.1",
                  fontWeight: "700",
                  maxWidth: "600px",
                  textTransform: "uppercase",
                  letterSpacing: "-1px",
                  marginBottom: "24px",
                  textAlign: "left",
                }}
              >
                Building the Future with Precision
              </p>
              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "white",
                  color: "black",
                  padding: "12px 24px",
                  borderRadius: "40px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "14px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                }}
              >
                Learn More
                <span
                  aria-hidden="true"
                  style={{
                    width: "18px",
                    height: "18px",
                    background: "#c84b00",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
