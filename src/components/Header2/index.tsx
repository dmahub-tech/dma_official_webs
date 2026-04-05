'use client';

import { useEffect } from 'react';
import parallaxie from '@/dva/common/parallaxie';
import { useTheme } from '@/dva/context/ThemeContext';
import { useScrollReveal } from '@/dva/hooks/useScrollReveal';

const Header2 = ({ 
  bg, 
  eyebrow = "Services",
  title = "Learn more about DIGITAL MASTERMIND ACADEMY", 
  mainTitle = "Where Creativity Meets",
  mainTitleSpan = "Innovation"
}: {
  bg: string, 
  eyebrow?: string,
  title?: string, 
  mainTitle?: string,
  mainTitleSpan?: string
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Reveal animations
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealDelay: 100,
  });

  const { ref: titleRef, className: titleClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 200,
  });

  useEffect(() => {
    // @ts-ignore
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header 
      className="pg-header-bus bg-img parallaxie valign position-relative" 
      data-background={bg} 
      data-overlay-dark={isDark ? '7' : '5'}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-6 md:px-12 lg:px-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container position-relative z-20">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              {/* Eyebrow with reveal */}
              <div ref={eyebrowRef} className={eyebrowClass}>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-8 h-px bg-gradient-to-r from-white/40 to-white/60" />
                  <span className="text-[10px] font-tech tracking-[0.5em] text-white/70 uppercase">
                    {eyebrow}
                  </span>
                  <div className="w-8 h-px bg-gradient-to-l from-white/40 to-white/60" />
                </div>
                <h6 className="text-sm font-medium text-white/80">
                  {title}
                </h6>
              </div>

              {/* Title with reveal */}
              <div ref={titleRef} className={titleClass}>
                <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white leading-tight">
                  {mainTitle} <br/> 
                  <span className="text-gradient">{mainTitleSpan}</span>
                </h1>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-breathe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2