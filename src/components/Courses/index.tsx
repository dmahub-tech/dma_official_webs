'use client';

import coursesData from "@/dva/data/business/courses.json";
import Link from "next/link";
import { useScrollReveal, useStaggerReveal } from "@/dva/hooks/useScrollReveal";
import { useTheme } from "@/dva/context/ThemeContext";

const Courses = ({ showImages = true }: { showImages?: boolean }) => {
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

  const allCourses = coursesData.flatMap(category => category.courses);
  
  const { 
    containerRef: cardsContainerRef, 
    getItemClassName, 
    getItemStyle 
  } = useStaggerReveal({
    count: allCourses.length,
    staggerDelay: 120,
    initialDelay: 300,
    revealClass: 'reveal-up',
  });

  return (
    <section 
      ref={sectionRef}
      className={`services section-padding pt-90 position-relative ${sectionClass}`}
    >
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
        <div className="row mb-80">
          <div className="col-lg-4" ref={headerRef}>
            <div className={headerClass}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                <span className="text-[10px] font-tech tracking-[0.5em] uppercase" style={{ color: 'var(--accent)' }}>
                  Courses
                </span>
              </div>
              
              <span className="text-[9px] font-tech tracking-[0.4em] block" style={{ color: 'var(--muted-foreground)' }}>
                Section 01
              </span>
              
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
                <div className="section-eyebrow mb-4">
                  <span className="section-eyebrow-text">Explore Our Learning Programs</span>
                </div>
                
                <h2 className="section-title mb-6">
                  Choose from{' '}
                  <span className="text-gradient">Our Courses</span>
                </h2>
                
                <p className="section-subtitle">
                  Choose from our carefully designed courses to build in-demand tech skills through various learning formats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {coursesData.map((category, categoryIndex) => {
          const { ref: categoryRef, className: categoryClass } = useScrollReveal({
            revealClass: 'reveal-up',
            revealDelay: 400 + (categoryIndex * 200),
          });
          
          return (
            <div 
              key={category.id} 
              ref={categoryRef}
              className={`mt-16 mb-20 ${categoryClass}`}
            >
              <div 
                className={`p-10 md:p-12 rounded-3xl mb-12 transition-all duration-500 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-gradient-to-br from-[rgba(26,26,36,0.95)] to-[rgba(18,18,26,0.98)] border-2 border-white/10 shadow-[0_25px_80px_rgba(99,102,241,0.25)] hover:shadow-[0_35px_100px_rgba(99,102,241,0.4)]' 
                    : 'bg-white border-2 border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]'
                }`}
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                  <h3 className="text-3xl md:text-4xl font-black" style={{ color: 'var(--foreground)' }}>
                    {category.category}
                  </h3>
                </div>
                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: 'var(--muted-foreground)',marginBottom: '1.25rem' }}>
                  {category.categoryDescription}
                </p>
              </div>
              
              <div className="services-grid service-card-height" ref={categoryIndex === 0 ? cardsContainerRef : undefined}>
                {category.courses.map((course, courseIndex) => {
                  const globalIndex = allCourses.findIndex(c => c.id === course.id);
                  return (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      index={globalIndex}
                      className={getItemClassName(globalIndex)}
                      style={getItemStyle(globalIndex)}
                      isDark={resolvedTheme === 'dark'}
                      showImages={showImages}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const getCourseImage = (courseName: string) => {
  const name = courseName.toLowerCase();
  if (name.includes('illustrator')) return 'adobeAi.jpg';
  if (name.includes('in-design') || name.includes('indesign')) return 'adobeDesign.jpg';
  if (name.includes('photoshop')) return 'adobePhotoShop.jpg';
  if (name.includes('javascript')) return 'javascript.jpg';
  if (name.includes('java')) return 'java.jpg';
  if (name.includes('c++')) return 'cpp.jpg';
  if (name.includes('c')) return 'c.jpg';
  if (name.includes('matlab')) return 'matLab.jpg';
  if (name.includes('software engineering')) return 'softwareEng.jpg';
  if (name.includes('ui/ux') || name.includes('figma') || name.includes('adobe xd')) return 'uiux.jpg';
  if (name.includes('frontend')) return 'frontendDevelopment.jpg';
  if (name.includes('backend')) return 'backendDevelopment.jpg';
  if (name.includes('artificial intelligence') || name.includes(' ai ')) return 'ai.jpg';
  if (name.includes('machine learning')) return 'machingLearing.jpg';
  return 'frontendDevelopment.jpg';
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(price);
};

const CourseCard = ({ 
  course, 
  index, 
  className, 
  style,
  isDark,
  showImages
}: { 
  course: any; 
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
        {isDark && (
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)'
            }}
          />
        )}

        <div className="absolute top-4 right-4 flex items-center gap-1" aria-hidden="true">
          <div className="w-2 h-px bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
          <div className="w-px h-2 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span 
            className="text-[10px] font-tech tracking-[0.5em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          
          <div className="flex gap-2">
            {course.CourseStatus === 'DISCOUNT' && (
              <span 
                className="text-[8px] font-tech tracking-[0.3em] uppercase px-2 py-1 rounded"
                style={{ 
                  background: 'var(--accent)',
                  color: 'white'
                }}
              >
                {course.discountInPercent}% OFF
              </span>
            )}
          </div>
        </div>

        {showImages && (
          <div className="service-image mb-4 overflow-hidden rounded-lg">
            <img 
              src={`img/courses/${getCourseImage(course.CourseName)}`}
              alt={course.CourseName}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-3">
          <span 
            className="text-xs font-tech tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{ 
              background: isDark ? 'rgba(255,255,255,0.05)' : 'var(--muted)',
              color: 'var(--accent)'
            }}
          >
            {course.level}
          </span>
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            {course.duration}
          </span>
        </div>

        <h5 className="card-title group-hover:text-[var(--accent)] transition-colors duration-300 mb-3">
          {course.CourseName}
        </h5>
        
        <p className="card-description mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="card-tags mb-4">
          {course.tags.slice(0, 3).map((tag: string, i: number) => (
            <span 
              key={i}
              className="card-tag hover:!bg-[var(--accent)] hover:!text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div 
          className="pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col gap-2">
            {course.virtualPrice && course.physicalPrice ? (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                    Virtual:
                  </span>
                  <span className="text-xl font-black" style={{ color: 'var(--accent)' }}>
                    {formatPrice(course.virtualPrice)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                    Physical:
                  </span>
                  <span className="text-xl font-black" style={{ color: 'var(--accent)' }}>
                    {formatPrice(course.physicalPrice)}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between gap-2">
                {course.discountInPercent > 0 && (
                  <span className="text-base line-through font-medium" style={{ color: 'var(--muted-foreground)' }}>
                    {formatPrice(course.price)}
                  </span>
                )}
                <span className="text-xl font-black" style={{ color: 'var(--accent)' }}>
                  {formatPrice(course.price * (1 - course.discountInPercent / 100))}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <Link 
            href={`/course`}
            className="group inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:gap-3"
            style={{ color: 'var(--accent)' }}
          >
            <span className="relative">
              Enroll Now
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

export default Courses
