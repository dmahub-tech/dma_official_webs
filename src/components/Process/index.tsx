'use client';

/* eslint-disable @next/next/no-img-element */
import process from '@/dva/data/business/process.json';
import { useScrollReveal, useStaggerReveal } from '@/dva/hooks/useScrollReveal';
import { useTheme } from '@/dva/context/ThemeContext';

const Process = ({ services }: {services?: any}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  // Header reveal
  const { ref: headerRef, className: headerClass } = useScrollReveal({
    revealClass: 'reveal-left',
    revealDelay: 0,
  });

  // Title reveal with delay
  const { ref: titleRef, className: titleClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 150,
  });

  // Stagger reveal for steps
  const {
    containerRef: stepsContainerRef,
    getItemClassName,
    getItemStyle,
  } = useStaggerReveal({
    count: process.length,
    staggerDelay: 150,
    initialDelay: 300,
    revealClass: 'reveal-right',
  });

  // Image reveal
  const { ref: imageRef, className: imageClass } = useScrollReveal({
    revealClass: 'reveal-scale',
    revealDelay: 200,
    revealThreshold: 0.2,
  });

  return (
    <section className={`process-img section-padding position-relative ${isDark ? 'bg-[var(--muted)]' : ''}`}>
      {/* Architectural grid lines - dark mode optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-30 ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Large background number */}
      <div 
        className="absolute top-20 right-4 lg:right-12 font-tech text-[12rem] lg:text-[20rem] font-bold leading-none pointer-events-none select-none z-0"
        style={{ 
          color: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'
        }}
        aria-hidden="true"
      >
        02
      </div>
      
      <div className="container position-relative z-10">
        <div className="row">
          <div className="col-lg-5">
            {/* Section Header with enhanced styling */}
            <div ref={headerRef} className={headerClass}>
              <div className="round-head mb-80">
                {/* Epoch marker */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                  <span className="text-[10px] font-tech tracking-[0.5em] uppercase" style={{ color: 'var(--accent)' }}>
                    Process
                  </span>
                </div>
                
                {/* Section number */}
                <span className="text-[9px] font-tech tracking-[0.4em] block mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  Section 02
                </span>
                
                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gradient-start)' }} />
                  <span className="text-[9px] font-tech tracking-[0.3em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                    In Progress
                  </span>
                </div>
                
                <div ref={titleRef} className={titleClass}>
                  <h6 className="section-eyebrow-text mb-4">Our Approach</h6>
                  <h2 className="section-title">
                    Embark on the <br /> 
                    <span className="text-gradient">innovation journey</span>
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Steps with staggered reveal */}
            <div ref={stepsContainerRef} className="steps-vr relative">
              {/* Vertical connecting line */}
              <div 
                className="absolute left-6 top-0 bottom-0 w-px hidden lg:block"
                style={{ 
                  background: `linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))`,
                  opacity: 0.3
                }}
                aria-hidden="true"
              />
              
              {process.map((step, idx) => (
                <div 
                  className={getItemClassName(idx)}
                  style={getItemStyle(idx)}
                  key={idx}
                >
                  <div className={`step flex ${idx !== process.length - 1 ? 'mb-40':''}`}>
                    <div className="relative z-10">
                      <div 
                        className="process-number group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: isDark 
                            ? 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
                            : 'var(--muted)',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
                        }}
                      >
                        <span style={{ color: 'var(--foreground)' }}>{ step.numb }</span>
                      </div>
                    </div>
                    <div className="cont ml-40">
                      <h6 
                        className={`${services ? 'fz-16 fw-600':''} mb-10 transition-colors duration-300 hover:text-[var(--accent)]`}
                        style={{ color: 'var(--foreground)' }}
                      >
                        { step.title }
                      </h6>
                      <p 
                        className="fz-13 leading-relaxed"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        { step.details }
                      </p>
                      
                      {/* Step status indicator */}
                      <div className="flex items-center gap-3 mt-4">
                        <div 
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: 'var(--gradient-start)' }}
                        />
                        <span 
                          className="text-[8px] font-tech tracking-[0.3em] uppercase"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          Step {String(idx + 1).padStart(2, '0')}
                        </span>
                        
                        {/* Progress dots */}
                        <div className="flex gap-1 ml-2">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 h-1 rounded-full"
                              style={{ 
                                background: i <= idx % 3 ? 'var(--accent)' : 'var(--border)',
                                opacity: i <= idx % 3 ? 1 : 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6 offset-lg-1 valign">
            <div 
              ref={imageRef} 
              className={`img out-box mt-50 ${imageClass}`}
            >
              {/* Decorative frame for image */}
              <div 
                className="absolute -inset-4 rounded-lg -z-10 opacity-50"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.15))'
                    : 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.08))'
                }}
                aria-hidden="true"
              />
              
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--accent)] opacity-50" aria-hidden="true" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--accent)] opacity-50" aria-hidden="true" />
              
              <img 
                src="img/laptop2.png" 
                alt="Process visualization" 
                className="hover-lift relative z-10"
                style={{
                  filter: isDark ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' : 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process