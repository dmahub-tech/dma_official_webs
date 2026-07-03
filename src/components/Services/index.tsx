'use client';

import services from "@/dva/data/business/services.json";
import Link from "next/link";
import { useScrollReveal, useStaggerReveal } from "@/dva/hooks/useScrollReveal";
import { useTheme } from "@/dva/context/ThemeContext";

const Services = ({ showImages = false }: { showImages?: boolean }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const { ref: sectionRef, className: sectionClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealThreshold: 0.05,
  });
  
  const { ref: headerRef, className: headerClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 100,
  });

  const { ref: titleRef, className: titleClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 200,
  });

  // Stagger reveal for service cards
  const { 
    containerRef: cardsContainerRef, 
    getItemClassName, 
    getItemStyle 
  } = useStaggerReveal({
    count: services.length,
    staggerDelay: 120,
    initialDelay: 300,
    revealClass: 'reveal-up',
  });

  return (
    <section 
      ref={sectionRef}
      className={`services section-padding pt-90 position-relative ${sectionClass}`}
    >
      {/* Architectural grid lines - dark mode optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
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
        className="absolute top-20 left-4 lg:left-12 font-tech text-[12rem] lg:text-[20rem] font-bold leading-none pointer-events-none select-none z-0"
        style={{ 
          color: resolvedTheme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'
        }}
        aria-hidden="true"
      >
        01
      </div>
      
      <div className="container position-relative z-10">
        {/* Section Header - Architectural Style with reveal animations */}
        <div className="row mb-80">
          <div className="col-lg-4" ref={headerRef}>
            <div className={headerClass}>
              {/* Epoch marker */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                <span className="text-[10px] font-tech tracking-[0.5em] uppercase" style={{ color: 'var(--accent)' }}>
                  Services
                </span>
              </div>
              
              {/* Section number */}
              <span className="text-[9px] font-tech tracking-[0.4em] block" style={{ color: 'var(--muted-foreground)' }}>
                Section 01
              </span>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gradient-start)' }} />
                <span className="text-[9px] font-tech tracking-[0.3em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                  Active
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8" ref={titleRef}>
            <div className={titleClass}>
              <div className="section-header">
                {/* Eyebrow */}
                <div className="section-eyebrow mb-4">
                  <span className="section-eyebrow-text">Our Area of Expertise</span>
                </div>
                
                {/* Main title with gradient highlight */}
                <h2 className="section-title mb-6">
                  Get The Best{' '}
                  <span className="text-gradient">From Us</span>
                </h2>
                
                {/* Subtitle */}
                <p className="section-subtitle">
                  Comprehensive digital solutions tailored to elevate your business presence 
                  and accelerate growth in an ever-evolving technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with staggered reveal */}
        <div className="services-grid service-card-height" ref={cardsContainerRef}>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              className={getItemClassName(index)}
              style={getItemStyle(index)}
              isDark={resolvedTheme === 'dark'}
              showImages={showImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Map service index to image filename
const serviceImages = [
  'ict.png',
  'sales.png',
  'graphicDesign.png',
  'solarInverter.png',
  'electrical.png',
  'software.png',
  'inverter.png',
  'websiteDesign.png',
];

// Individual Service Card with enhanced dark mode styling
const ServiceCard = ({ 
  service, 
  index, 
  className, 
  style,
  isDark,
  showImages
}: { 
  service: any; 
  index: number; 
  className: string;
  style: React.CSSProperties;
  isDark: boolean;
  showImages: boolean;
}) => {
  return (
    <div className={className} style={style}>
      <div 
        className={`service-card h-full group relative overflow-hidden ${isDark ? 'border-white/5' : ''}`}
      >
        {/* Ambient glow effect for dark mode */}
        {isDark && (
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)'
            }}
          />
        )}

        {/* Corner marker - architectural detail */}
        <div className="absolute top-4 right-4 flex items-center gap-1" aria-hidden="true">
          <div className="w-2 h-px bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
          <div className="w-px h-2 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
        </div>

        {/* Service Number with epoch styling */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="text-[10px] font-tech tracking-[0.5em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          
          {/* Micro label */}
          <span 
            className="text-[8px] font-tech tracking-[0.3em] uppercase px-2 py-1 rounded"
            style={{ 
              background: isDark ? 'rgba(255,255,255,0.03)' : 'var(--muted)',
              color: 'var(--muted-foreground)'
            }}
          >
            Service
          </span>
        </div>

        {/* Service Image - only shown when showImages is true */}
        {showImages && (
          <div className="service-image mb-4 overflow-hidden rounded-lg">
            <img 
              src={`img/services/${serviceImages[index]}`}
              alt={service.title}
              className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Icon with gradient background */}
        <div className="service-icon mb-4 group-hover:scale-110 transition-transform duration-500 ">
          <span className={service.icon} />
        </div>

        {/* Content with proper text colors */}
        <h5 className="card-title group-hover:text-[var(--accent)] transition-colors duration-300">
          {service.title}
        </h5>
        
        <p className="card-description">
          {service.detials}
        </p>

        {/* Tags with dark mode optimizations */}
        <div className="card-tags">
          {service.tags.map((tag: string, i: number) => (
            <span 
              key={i}
              className="card-tag hover:!bg-[var(--accent)] hover:!text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status indicator with animation */}
        <div 
          className="flex items-center gap-3 mt-4 pt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--gradient-start)' }}
          />
          <span 
            className="text-[9px] font-tech tracking-[0.4em] uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Available Now
          </span>
        </div>

        {/* Learn More Button - Text only with animated hover effect */}
        <div className="mt-3">
          <Link 
            href={`/services/${service.id}`}
            className="group inline-flex items-center gap-2 font-medium text-sm transition-all duration-300 hover:gap-3"
            style={{ color: 'var(--accent)' }}
          >
            <span className="relative">
              Learn More
              <span 
                className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: 'var(--accent)' }}
              />
            </span>
            <svg 
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;