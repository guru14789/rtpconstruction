"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

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
              RTP Construction
            </h1>
          </div>
        }
      >
        <div className="relative w-full h-full flex flex-col justify-end overflow-hidden bg-black">
          {/* Background Image inside the tilting card */}
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: "url('/arix_hero.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))" }}></div>
          
          {/* Removed internal navbar to rely on the global fixed navbar */}

          {/* Content matching the original hero */}
          <div className="relative z-20 w-full px-10 pb-16 mx-auto flex justify-between items-end" style={{maxWidth: "1280px"}}>
            <div>
              <h1 style={{color: "white", fontSize: "clamp(30px, 5vw, 60px)", lineHeight: "1.05", fontWeight: "700", maxWidth: "600px", textTransform: "uppercase", letterSpacing: "-1px", marginBottom:"30px", textAlign: "left"}}>
                Building the Future with Precision
              </h1>
              <a href="#about" style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: "black", padding: "12px 24px", borderRadius: "40px", fontWeight: "600", textDecoration: "none", fontSize: "14px"}}>
                Learn More
                <span style={{width: "16px", height: "16px", background: "#ff6a00", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", padding: "2px"}}>
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
