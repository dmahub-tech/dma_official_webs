"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Controller, Navigation } from "swiper/modules";
import parallaxie from "@/dva/common/parallaxie";
import testimonials from "@/dva/data/business/testimonials.json";
import { useTheme } from "@/dva/context/ThemeContext";
import { useScrollReveal } from "@/dva/hooks/useScrollReveal";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Controller]);

const Testimonials = ({ curve }: { curve: boolean }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const galleryThumbs = useRef<null | any>(null);
  const galleryTop = useRef<null | any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // Reveal animations
  const { ref: headerRef, className: headerClass } = useScrollReveal({
    revealClass: 'reveal-fade',
    revealDelay: 0,
  });

  const { ref: contentRef, className: contentClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 150,
  });

  useLayoutEffect(() => {
    // @ts-ignore
    galleryThumbs.current.controller.control = galleryTop.current;
    // @ts-ignore
    galleryTop.current.controller.control = galleryThumbs.current;
  }, []);

  useEffect(() => {
    // @ts-ignore
    new parallaxie(".testimonials.bg-img.parallaxie");
  }, []);

  return (
    <section
      className={`testimonials slider-thumbs section-padding pb-0 bg-img parallaxie position-relative ${isDark ? 'dark-testimonials' : ''}`}
      data-background={curve ? "img/background/d4.jpg" : "img/background/d4.jpg"}
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
          <div className="col-12">
            <div ref={headerRef} className={`round-head text-center mb-50 ${headerClass}`}>
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-white/40 to-white/60" />
                <span className="text-[10px] font-tech tracking-[0.5em] text-white/70 uppercase">
                  Testimonials
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-white/40 to-white/60" />
              </div>
              
              <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white">
                Feedback from our clients
              </h3>
              
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-tech tracking-[0.3em] text-white/50 uppercase">
                  Trusted by Industry Leaders
                </span>
              </div>
            </div>
          </div>
          
          <div ref={contentRef} className={`col-lg-8 col-md-10 ${contentClass}`}>
            <div>
              <Swiper
                className="swiper-container gallery-top"
                speed={350}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  // @ts-ignore
                  galleryTop.current = swiper;
                  setTimeout(() => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
              >
                {testimonials.galleryTop.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item text-center">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <svg 
                          className="w-10 h-10 mx-auto opacity-30" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: 'var(--gradient-start)' }}
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      <div className="text">
                        <p className="text-lg md:text-xl leading-relaxed text-white/90">
                          &ldquo;{slide.content}&rdquo;
                        </p>
                      </div>
                      
                      <div className="info mt-8">
                        <h6 className="text-lg font-bold text-white mb-1 tracking-wide">
                          {slide.author.name}
                        </h6>
                        <span className="text-sm text-white/60 font-tech tracking-wider uppercase">
                          {slide.author.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <Swiper
                className="swiper-container gallery-thumbs mt-10"
                speed={500}
                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                slideToClickedSlide={true}
                loop={true}
                touchRatio={0.2}
                onSwiper={(swiper) => {
                  // @ts-ignore
                  galleryThumbs.current = swiper;
                }}
              >
                {testimonials.galleryThumbs.map((thumb, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="img cursor-pointer">
                      <div 
                        className="circle overflow-hidden border-2 transition-all duration-300 hover:border-[var(--gradient-start)]"
                        style={{ 
                          borderColor: 'rgba(255,255,255,0.2)',
                        }}
                      >
                        <img 
                          src={thumb} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <span 
                        className="gr-green-bg absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          <div className="controls-rf">
            <div
              className="swiper-button-next ctrl-circle hover:scale-110 transition-transform"
              ref={navigationNextRef}
            >
              <span className="icon pe-7s-angle-right"></span>
            </div>
            <div
              className="swiper-button-prev ctrl-circle hover:scale-110 transition-transform"
              ref={navigationPrevRef}
            >
              <span className="icon pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
      </div>

      {curve ? (
        <div className="curve-top">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="217"
            viewBox="0 0 1920 217"
          >
            <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
              <path
                d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
                opacity=".3"
              ></path>
              <path
                d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
                opacity=".6"
              ></path>
              <path d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"></path>
            </g>
          </svg>
        </div>
      ) : null}
    </section>
  );
};

export default Testimonials;
