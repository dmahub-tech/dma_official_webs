'use client';

import services from '@/dva/data/business/services.json';
import { useTheme } from '@/dva/context/ThemeContext';
import { useStaggerReveal } from '@/dva/hooks/useScrollReveal';

const Services2 = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Stagger reveal for service cards
  const {
    containerRef,
    getItemClassName,
    getItemStyle
  } = useStaggerReveal({
    count: services.length,
    staggerDelay: 150,
    initialDelay: 100,
    revealClass: 'reveal-up',
  });

  return (
    <section 
      className="services section-padding position-relative"
      style={{ backgroundColor: isDark ? 'var(--background)' : 'var(--muted)' }}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-20 ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container position-relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="row mb-60">
          <div className="col-lg-8 mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
              <span className="text-[10px] font-tech tracking-[0.5em] uppercase" style={{ color: 'var(--accent)' }}>
                What We Offer
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-[var(--gradient-start)] to-[var(--gradient-end)]" />
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, index) => (
              <div 
                className={`col-lg-4 col-md-6 mb-30 ${getItemClassName(index)}`} 
                key={index}
                style={getItemStyle(index)}
              >
                <div 
                  className={`item text-center p-40 rounded-xl transition-all duration-500 hover:scale-[1.02] group ${
                    isDark 
                      ? 'bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]' 
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Icon */}
                  <div className="icon text-5xl mb-20 transition-transform duration-500 group-hover:scale-110">
                    <span 
                      className={service.icon}
                      style={{ 
                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h6 
                    className="text-lg font-semibold mb-15 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    style={{ color: 'var(--foreground)' }}
                  >
                    { service.title }
                  </h6>

                  {/* Description */}
                  <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7' }}>
                    { service.detials }
                  </p>

                  {/* Service number */}
                  <div 
                    className="mt-20 pt-20 text-[10px] font-tech tracking-[0.3em] uppercase"
                    style={{ 
                      color: 'var(--muted-foreground)',
                      borderTop: '1px solid var(--border)'
                    }}
                  >
                    Service {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services2