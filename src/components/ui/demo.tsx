"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import heroVideo from "../da68d926f31eb7a2e977d2e69c23719d.mp4";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-[#121212]">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-10 mt-10 md:mt-0">
            <span style={{color:"#ff6a00", fontWeight:600, fontSize:"14px", letterSpacing:"2px", textTransform:"uppercase", display:"block", marginBottom:"16px"}}>
              Welcome
            </span>
            <h1 className="text-4xl md:text-[5rem] font-bold text-white uppercase tracking-tighter leading-none">
              RTP CONSTRUCTION
            </h1>
          </div>
        }
      >
        <div className="relative w-full h-full flex flex-col justify-end overflow-hidden bg-black">
          {/* Custom Background Video inside the tilting card */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/arix_hero.jpg"
            className="absolute inset-0 z-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.85))" }}></div>
          
          {/* Content matching the original hero */}
          <div className="container relative z-20 h-full flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end pb-8 sm:pb-12 md:pb-16">
            <div className="mt-auto">
              <h1 style={{color: "white", fontSize: "clamp(24px, 5vw, 60px)", lineHeight: "1.1", fontWeight: "700", maxWidth: "600px", textTransform: "uppercase", letterSpacing: "-1px", marginBottom:"20px", textAlign: "left"}}>
                Building the Future with Precision
              </h1>
              <a href="#about" style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: "black", padding: "10px 20px", borderRadius: "40px", fontWeight: "600", textDecoration: "none", fontSize: "14px"}}>
                Learn More
                <span style={{width: "16px", height: "16px", background: "#ff6a00", borderRadius: "50%", display: "flex", alignItems: "center", justify: "center", color: "white", padding: "2px"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
