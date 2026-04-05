'use client';

import Tilt from 'react-parallax-tilt';
import features from '@/dva/data/business/features.json';
import { useTheme } from '@/dva/context/ThemeContext';
import { useScrollReveal, useStaggerReveal } from '@/dva/hooks/useScrollReveal';

const Features = ({ services }: {services?: any}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Reveal animations
  const { ref: headerRef, className: headerClass } = useScrollReveal({
    revealClass: 'reveal-up',
    revealDelay: 0,
  });

  // Stagger reveal for feature cards
  const {
    containerRef: cardsRef,
    getItemClassName,
    getItemStyle
  } = useStaggerReveal({
    count: features.feats.length,
    staggerDelay: 100,
    initialDelay: 200,
    revealClass: 'reveal-scale',
  });

  return (
    <section 
      className={`feat-exp section-padding ${services ? 'pb-50':'pb-0'} position-relative`} 
      style={{ backgroundColor: isDark ? '#0d0d12' : '#1a1a2e' }}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-20 ${
                i % 2 === 0 ? 'hidden lg:block' : 'hidden md:block'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container position-relative z-10" ref={headerRef}>
        <div className={`row ${headerClass}`}>
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className="exp">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                <span className="text-[9px] font-tech tracking-[0.4em] uppercase text-white/60">
                  Experience
                </span>
              </div>
              
              {
                services ?
                <h2 className="text-3xl font-semibold text-white">Create your own unique website</h2>
                :
                <h3 className="text-2xl font-bold text-white">Create your own <span className="font-light">unique website</span></h3>
              }
            </div>
          </div>
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className={`exp ${services ? '':'m-auto'}`}>
              <div className="flex items-center">
                <h2 
                  className={`text-6xl lg:text-7xl font-bold ${services ? '':'line-height-1'}`}
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  { features.years }
                </h2>
                <div className="valign ml-20">
                  <h6 className="text-xs uppercase tracking-wider text-white/70">
                    years <br /> in the field
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="text">
              <p className="text-white/70 leading-relaxed">
                { services ? features.srtext : features.text }
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid mt-100 position-relative z-10" ref={cardsRef}>
        <div className="row">
          {
            features.feats.map((feature, idx) => (
              services ?
              (
                <div 
                  key={idx} 
                  className={`col-lg-3 col-md-6 hover3d mb-30 ${getItemClassName(idx)}`}
                  style={getItemStyle(idx)}
                >
                  <div 
                    className="feat-item-img hover3d-child bg-img d-flex align-items-end rounded-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                    style={{ 
                      backgroundImage: `url('${feature.bg}')`,
                      minHeight: '300px'
                    }} 
                    data-overlay-dark={isDark ? '6' : '4'}
                  >
                    <div className="num text-4xl font-bold text-white/30">{ feature.numb }</div>
                    <div className="cont p-20">
                      <h6 className="text-lg font-medium text-white">{ feature.type }</h6>
                      <span className="text-sm text-white/70">{ feature.title }</span>
                    </div>
                  </div>
                </div>
              )
              :
              (
                <Tilt 
                  key={idx} 
                  className={`col-lg-3 col-md-6 hover3d mb-30 ${getItemClassName(idx)}`}
                  tiltMaxAngleY={10} 
                  tiltMaxAngleX={10}
                  style={getItemStyle(idx)}
                >
                  <div 
                    className="feat-item-img hover3d-child bg-img d-flex align-items-end rounded-lg overflow-hidden"
                    style={{ 
                      backgroundImage: `url('${feature.bg}')`,
                      minHeight: '300px'
                    }} 
                    data-overlay-dark={isDark ? '6' : '4'}
                  >
                    <div className="num text-4xl font-bold text-white/30">{ feature.numb }</div>
                    <div className="cont p-20">
                      <span className="text-sm text-white/70">{ feature.title }</span>
                      <h6 className="text-lg font-medium text-white mt-1">{ feature.type }</h6>
                    </div>
                  </div>
                </Tilt>
              )
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features