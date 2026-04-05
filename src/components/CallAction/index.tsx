'use client';

import { useEffect } from 'react';
import parallaxie from '@/dva/common/parallaxie';
import { useTheme } from '@/dva/context/ThemeContext';
import { useScrollReveal } from '@/dva/hooks/useScrollReveal';

const CallToAction = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Staggered reveal animations
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealDelay: 0,
  });

  const { ref: titleRef, className: titleClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 100,
  });

  const { ref: descRef, className: descClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 200,
  });

  const { ref: ctaRef, className: ctaClass } = useScrollReveal({
    revealClass: 'reveal-scale',
    revealDelay: 300,
  });

  useEffect(() => {
    parallaxie('.call-action.bg-img.parallaxie');
  }, []);

  return (
    <section 
      className="section-padding bg-img parallaxie call-action position-relative" 
      data-background="/img/background/21.jpg" 
      data-overlay-dark={isDark ? '8' : '6'}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-6 md:px-12 lg:px-20">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              {/* Eyebrow with reveal */}
              <div ref={eyebrowRef} className={eyebrowClass}>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gradient-to-r from-white/40 to-white/60" />
                  <span className="text-[10px] font-tech tracking-[0.5em] text-white/70 uppercase">
                    Let&apos;s Connect
                  </span>
                  <div className="w-12 h-px bg-gradient-to-l from-white/40 to-white/60" />
                </div>
              </div>

              {/* Title with reveal */}
              <div ref={titleRef} className={titleClass}>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6 leading-tight">
                  Have a project in mind?<br />
                  <span className="text-gradient">Let&apos;s discuss</span>
                </h2>
              </div>

              {/* Description with reveal */}
              <div ref={descRef} className={descClass}>
                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Ready to Elevate Your Vision? Let&apos;s Turn Ideas into Reality. 
                  Schedule a consultation and start your journey today.
                </p>
              </div>

              {/* CTA Button with reveal */}
              <div ref={ctaRef} className={ctaClass}>
                <div
                  data-cal-namespace=""
                  data-cal-link="sogtheimmortal/30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="butn butn-md gr-purple-red-bg text-light m-auto mt-30 w-50 c-btn inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span className="text slide-up group-hover:translate-y-[-100%]">Set Appointment Now</span>
                  <span className="text slide-down group-hover:translate-y-[0]">Set Appointment Now</span>
                  
                  {/* Arrow icon */}
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Trust indicators */}
              <div ref={ctaRef} className={`${ctaClass} mt-12 flex items-center justify-center gap-8`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-tech tracking-wider text-white/50 uppercase">
                    Free Consultation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-[11px] font-tech tracking-wider text-white/50 uppercase">
                    30 Min Session
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction