'use client';

import parallaxie from '@/dva/common/parallaxie';
import { useState, useEffect } from 'react';
// @ts-ignore
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useTheme } from "@/dva/context/ThemeContext";
import { useScrollReveal } from "@/dva/hooks/useScrollReveal";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  
  // Staggered reveal animations for content
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealDelay: 100,
  });
  
  const { ref: titleRef, className: titleClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 200,
  });
  
  const { ref: descRef, className: descClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 350,
  });
  
  const { ref: ctaRef, className: ctaClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 500,
  });

  useEffect(() => {
    // @ts-ignore
    new parallaxie('header .background.bg-img.parallaxie');
  }, []);

  const openVideo = (e: any) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="home-bus1 position-re">
      {/* Architectural overlay grid lines */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-6 md:px-12 lg:px-20">
          <div className="w-px h-full bg-white/10 hidden lg:block"></div>
          <div className="w-px h-full bg-white/10 hidden md:block"></div>
          <div className="w-px h-full bg-white/10 hidden lg:block"></div>
          <div className="w-px h-full bg-white/10 hidden lg:block"></div>
          <div className="w-px h-full bg-white/10 hidden md:block"></div>
          <div className="w-px h-full bg-white/10 hidden lg:block"></div>
        </div>
      </div>

      {/* Corner coordinates */}

      <div 
        className="background bg-img parallaxie valign" 
        data-background="img/background/d3.jpg" 
        data-overlay-dark={resolvedTheme === 'dark' ? '7' : '5'}
      >
        <div className="container position-relative z-20">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="caption">
                {/* Epoch marker with reveal animation */}
                <div ref={eyebrowRef} className={eyebrowClass}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"></div>
                    <p className="text-[9px] font-tech tracking-[0.6em] text-white/80">
                      Innovation as Infrastructure
                    </p>
                  </div>
                </div>

                {/* Sub-title with animation */}
                <div ref={eyebrowRef} className={`${eyebrowClass}`}>
                  <h6 className="sub-title fw-400 fz-12 radius-30 mb-4">
                    We Unleash Innovation
                  </h6>
                </div>
                
                {/* Main title with reveal animation */}
                <div ref={titleRef} className={titleClass}>
                  <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight tracking-tight mb-6">
                    Your Destination for <br />
                    <span className="text-gradient">Cutting-Edge Tech</span> <br />
                    Solutions & Upskilling
                  </h1>
                </div>

                {/* Description with reveal animation */}
                <div ref={descRef} className={descClass}>
                  <p className="text-white/70 max-w-lg mb-8 text-base leading-relaxed">
                    Building the people who build civilizations. From software development 
                    to data science, we equip you with the skills to shape the future.
                  </p>
                </div>
                
                {/* CTA with reveal animation */}
                <div ref={ctaRef} className={ctaClass}>
                  <div className="flex items-center gap-6">
                    <button 
                      data-cal-namespace=""
                      data-cal-link="sogtheimmortal/30min"
                      data-cal-config='{"layout":"month_view"}'
                      className="butn butn-md butn-rounded butn-light text text-hover-light"
                    >
                      Set Appointment
                    </button>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-px w-8 bg-white/30"></div>
                      <span className="text-[10px] font-tech tracking-[0.3em] text-white/60 uppercase">
                        Start Your Journey
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 offset-lg-2 valign">
              <div className="full-width text-center">
                <div className="play-button hover:scale-110 transition-transform duration-300">
                  <div className="vid cursor-pointer" onClick={openVideo}>
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-6 md:left-12 lg:left-20 z-20 flex items-center gap-4" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-breathe"></div>
        <span className="text-[8px] font-tech tracking-[0.5em] text-white/50 rotate-90 origin-left translate-x-2">
          Scroll
        </span>
      </div>

      <div className="curve-buttom">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1920" height="217"
          viewBox="0 0 1920 217">
          <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
            <path
              d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
              opacity=".3"></path>
            <path
              d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
              opacity=".6"></path>
            <path
              d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z">
            </path>
          </g>
        </svg>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="AzwC6umvd1s"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header