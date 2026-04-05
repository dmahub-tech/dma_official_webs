'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from 'next/link';
import footerData from '@/dva/data/footers/main-footer.json';
import { useTheme } from "@/dva/context/ThemeContext";
import { useScrollReveal, useStaggerReveal } from "@/dva/hooks/useScrollReveal";

type FooterProps = {
    footerClass?: string;
    footerBg?: boolean;
    business?: boolean;
    creative?: boolean;
};

const Footer = ({ footerClass, footerBg, business, creative }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  const isDark = resolvedTheme === 'dark';

  // Reveal animations for footer sections
  const { ref: ctaRef, className: ctaClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 0,
  });

  const { ref: contentRef, className: contentClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealDelay: 100,
  });

  // Stagger reveal for footer columns
  const {
    containerRef: columnsRef,
    getItemClassName,
    getItemStyle
  } = useStaggerReveal({
    count: 5,
    staggerDelay: 100,
    initialDelay: 200,
    revealClass: 'reveal-up',
  });

  useEffect(() => {
    if (!creative && footerRef.current) {
      footerRef.current.setAttribute("data-overlay-dark", "0");
    }
  }, [creative]);

  return (
    <footer 
      className={`${footerClass} ${isDark ? 'dark' : ''} position-relative`} 
      style={{ 
        backgroundImage: footerBg && !isDark ? "url('img/background/8.jpg')" : "none",
        backgroundColor: isDark ? 'var(--background)' : undefined
      }} 
      ref={footerRef}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-20 ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Large background number */}
      <div 
        className="absolute top-10 left-4 lg:left-12 font-tech text-[10rem] lg:text-[16rem] font-bold leading-none pointer-events-none select-none z-0"
        style={{ 
          color: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'
        }}
        aria-hidden="true"
      >
        04
      </div>
      {
        footerBg ? (
          <div ref={ctaRef} className={`cal pb-80 pt-80 position-relative z-10 ${ctaClass}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="cont">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                      <span className="text-[10px] font-tech tracking-[0.5em] uppercase" style={{ color: 'var(--accent)' }}>
                        Stay Connected
                      </span>
                    </div>
                    
                    <h4 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      Partner with us!
                    </h4>
                    
                    <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
                      Let&apos;s build the next big thing together.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-lg-end justify-content-start mt-4 mt-lg-0">
                  <div>
                    <Link 
                      href="/contact" 
                      className="butn butn-sm butn-rounded inline-flex items-center gap-2 group"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                        color: 'white'
                      }}
                    >
                      <span className="text-sm">Get In Touch</span>
                      <svg 
                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" 
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
            </div>
          </div>
        )
        :
        null
      }
      <div ref={contentRef} className={`container pt-80 pb-80 position-relative z-10 ${contentClass}`}>
        <div className="row lg:gap-y-10" ref={columnsRef}>
          {/* Logo & Description Column */}
          <div className={`col-lg-3 col-md-6 mb-40 mb-lg-0 ${getItemClassName(0)}`} style={getItemStyle(0)}>
            <div className="clumn">
              <div className="logo mb-20">
                <Link href="/">
                  {isDark ? (
                    <img 
                      src="/img/blueLogo.png" 
                      alt="Digital Mastermind Academy" 
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <img 
                      src="/img/blackLogo.png" 
                      alt="Digital Mastermind Academy" 
                      className="h-10 w-auto object-contain"
                    />
                  )}
                </Link>
              </div>
              <div className="text">
                <p className="text-sm" style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                  Empowering businesses and individuals through innovative technology solutions and education.
                </p>
              </div>
              <div className="social circle-bord mt-20">
                <ul className="rest horizontal-link flex gap-2">
                  <li className="flex items-center justify-center">
                    <Link 
                      href={footerData.social_links.facebook}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center border transition-all duration-300 hover:scale-110"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <i className="fab fa-facebook-f text-xs leading-none block"></i>
                    </Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <Link 
                      href={footerData.social_links.twitter}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center border transition-all duration-300 hover:scale-110"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <i className="fab fa-twitter text-xs leading-none block"></i>
                    </Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <Link 
                      href={footerData.social_links.youtube}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center border transition-all duration-300 hover:scale-110"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <i className="fab fa-youtube text-xs leading-none block"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className={`col-lg-1 col-md-6 mb-40 mb-lg-0 ${getItemClassName(1)}`} style={getItemStyle(1)}>
            <div className="clumn">
              <h5 className="title fw-600 text-base mb-20" style={{ color: 'var(--foreground)' }}>
                Quick Links
              </h5>
              <ul className="cmp-links">
                <li className="mb-10">
                  <Link 
                    href="/"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-10">
                  <Link 
                    href="/services"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-10">
                  <Link 
                    href="/courses"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Courses
                  </Link>
                </li>
                <li className="mb-10">
                  <Link 
                    href="/blog"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mb-10">
                  <Link 
                    href="/contact"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Programs Section */}
          <div className={`col-lg-2 col-md-6 mb-40 mb-lg-0 ${getItemClassName(2)}`} style={getItemStyle(2)}>
            <div className="clumn">
              <h5 className="title fw-600 text-base mb-20" style={{ color: 'var(--foreground)' }}>
                Programs
              </h5>
              <ul className="cmp-links">
                <li className="mb-10">
                  <Link 
                    href="/programs/industrial-training"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Industrial Training
                  </Link>
                </li>
                <li className="mb-10">
                  <Link 
                    href="/programs/internship"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Internship Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className={`col-lg-2 col-md-6 mb-40 mb-lg-0 ${getItemClassName(3)}`} style={getItemStyle(3)}>
            <div className="clumn">
              <h5 className="title fw-600 text-base mb-20" style={{ color: 'var(--foreground)' }}>
                Contact
              </h5>
              <ul className="address">
                <li className="adrs mb-10" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  <i className="fas fa-map-marker-alt mr-2 text-xs" style={{ color: 'var(--accent)' }}></i>
                  123 Tech Park, Innovation Street, Silicon Valley, CA 94043
                </li>
                <li className="eml mb-10">
                  <Link 
                    href="mailto:info@digitalmastermindacademy.com"
                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <i className="fas fa-envelope mr-2 text-xs" style={{ color: 'var(--accent)' }}></i>
                    info@digitalmastermindacademy.com
                  </Link>
                </li>
                <li className="tel">
                  <Link 
                    href="tel:+18001234567"
                    className="text-sm font-medium transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <i className="fas fa-phone mr-2 text-xs" style={{ color: 'var(--accent)' }}></i>
                    +1 (800) 123-4567
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Newsletter */}
          <div className={`col-lg-4 col-md-6  ${getItemClassName(4)}`} style={getItemStyle(4)}>
            <div className="clumn">
              <h5 className="title fw-600 text-base mb-20" style={{ color: 'var(--foreground)' }}>
                Newsletter
              </h5>
              <p className="mb-15 text-sm" style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                Subscribe to our newsletter to receive updates and exclusive offers.
              </p>
              <form className="flex gap-2 flex-wrap sm:flex-nowrap">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded border transition-all duration-300 focus:outline-none focus:border-[var(--accent)]"
                  style={{ 
                    background: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                />
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm rounded font-medium transition-all duration-300 hover:opacity-90"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                    color: 'white'
                  }}
                >
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`${footerBg ? 'sub-footer pb-50 pt-0 no-bord': creative ? 'sub-footer pb-50 pt-50':'sub-footer pb-50'} position-relative z-10`}
        style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link text-sm">
                <ul className="rest flex flex-wrap gap-6">
                  <li>
                    <Link 
                      href="/privacy"
                      className="text-xs transition-colors duration-300 hover:text-[var(--accent)]"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/legal"
                      className="text-xs transition-colors duration-300 hover:text-[var(--accent)]"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                       Legal notice
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/terms"
                      className="text-xs transition-colors duration-300 hover:text-[var(--accent)]"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                       Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="copyrights d-flex justify-content-lg-end justify-content-start">
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  &copy; {currentYear} Digital Mastermind Academy. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer