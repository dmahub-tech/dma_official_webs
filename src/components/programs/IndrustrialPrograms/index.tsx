"use client";

import programs from "@/dva/data/business/programs.json";
import Link from "next/link";
import { useScrollReveal, useStaggerReveal } from "@/dva/hooks/useScrollReveal";
import { useTheme } from "@/dva/context/ThemeContext";

const IndustrialPrograms = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const { ref: sectionRef, className: sectionClass } = useScrollReveal({
    revealClass: "reveal-fade",
    revealThreshold: 0.05,
  });

  const { ref: headerRef, className: headerClass } = useScrollReveal({
    revealClass: "reveal-up",
    revealDelay: 100,
  });

  const { ref: subtitleRef, className: subtitleClass } = useScrollReveal({
    revealClass: "reveal-up",
    revealDelay: 200,
  });

  const {
    containerRef: cardsContainerRef,
    getItemClassName,
    getItemStyle,
  } = useStaggerReveal({
    count: programs.IndustrialPrograms.length,
    staggerDelay: 120,
    initialDelay: 300,
    revealClass: "reveal-up",
  });

  const {
    containerRef: approachContainerRef,
    getItemClassName: getApproachClassName,
    getItemStyle: getApproachStyle,
  } = useStaggerReveal({
    count: programs.learningApproach.length,
    staggerDelay: 120,
    initialDelay: 200,
    revealClass: "reveal-up",
  });

  return (
    <section
      ref={sectionRef}
      className={`services section-padding pt-90 pb-90 position-relative ${sectionClass}`}
    >
      {/* Architectural grid lines - dark mode optimized */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-30 ${
                i % 2 === 0 ? "hidden lg:block" : "hidden md:block"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Large background number */}
      <div
        className="absolute top-20 left-4 lg:left-12 font-tech text-[12rem] lg:text-[20rem] font-bold leading-none pointer-events-none select-none z-0"
        style={{
          color: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.03)",
        }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="container position-relative z-10">
        {/* Section Header */}
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <div
              ref={headerRef}
              className={`position-relative mb-20 ${headerClass}`}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
                <span
                  className="text-[10px] font-tech tracking-[0.5em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Our Programs
                </span>
                <div className="w-12 h-px bg-gradient-to-l from-[var(--gradient-start)] to-[var(--gradient-end)]" />
              </div>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Structured pathways to professional excellence
              </h2>
            </div>
            <div ref={subtitleRef} className={subtitleClass}>
              <p
                className="text-lg"
                style={{ color: "var(--muted-foreground)" }}
              >
                Transformative Professional Experiences - Our programs are
                designed to take you from learning to industry-ready through
                structured pathways.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid with staggered reveal */}
        <div className="services-grid" ref={cardsContainerRef}>
          {programs.IndustrialPrograms.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              className={getItemClassName(index)}
              style={getItemStyle(index)}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Learning Approach Section */}
        <div className="row justify-content-center mt-80">
          <div className="col-lg-8 text-center mb-50">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
              <span
                className="text-[10px] font-tech tracking-[0.5em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Our Learning Approach
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-[var(--gradient-start)] to-[var(--gradient-end)]" />
            </div>
            <h3
              className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              We combine practical learning with professional mentorship
            </h3>
            <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
              Career-transforming experiences designed for your success
            </p>
          </div>
        </div>

        <div className="services-grid" ref={approachContainerRef}>
          {programs.learningApproach.map((approach, idx) => (
            <ApproachCard
              key={idx}
              approach={approach}
              index={idx}
              className={getApproachClassName(idx)}
              style={getApproachStyle(idx)}
              isDark={isDark}
            />
          ))}
        </div>

        {/* CTA Section - Minimal Professional Design */}
        <div className="row justify-content-center mt-16">
          <div className="col-lg-7">
            <div className="text-center py-16 px-6 md:px-12">
              {/* Eyebrow */}
              <span
                className="inline-block text-xs font-tech tracking-[0.3em] uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                Start Your Journey
              </span>

              {/* Main Headline */}
              <h3
                className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                Ready to Transform Your Career?
              </h3>

              {/* Supporting Text */}
              <p
                className="text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Join 500+ professionals who advanced their careers through our
                industry-leading programs.
              </p>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-5 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 group "
                style={{
                  background: "var(--accent)",
                  borderRadius: "12px",
                  color: "white",
                  boxShadow: isDark
                    ? "0 8px 30px rgba(99, 102, 241, 0.3)"
                    : "0 8px 30px rgba(99, 102, 241, 0.25)",
                }}
              >
                <span>Get Started Now</span>
              </Link>

              {/* Trust Indicators - Centered */}
              <div
                className="flex flex-col items-center justify-content-center gap-4 mt-10 text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" />
                  95% Placement Rate
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-star text-yellow-500" />
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Program Card with Services component styling
const ProgramCard = ({
  program,
  index,
  className,
  style,
  isDark,
}: {
  program: any;
  index: number;
  className: string;
  style: React.CSSProperties;
  isDark: boolean;
}) => {
  return (
    <div className={className} style={style}>
      <div
        className={`service-card programs-card-height h-full group relative overflow-hidden ${isDark ? "border-white/5" : ""}`}
      >
        {/* Ambient glow effect for dark mode */}
        {isDark && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)",
            }}
          />
        )}

        {/* Corner marker - architectural detail */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1"
          aria-hidden="true"
        >
          <div className="w-2 h-px bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
          <div className="w-px h-2 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
        </div>

        {/* Program Number with epoch styling */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] font-tech tracking-[0.5em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Micro label */}
          <span
            className="text-[8px] font-tech tracking-[0.3em] uppercase px-2 py-1 rounded"
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : "var(--muted)",
              color: "var(--muted-foreground)",
            }}
          >
            Program
          </span>
        </div>

        {/* Icon with gradient background */}
        <div className="service-icon mb-4 group-hover:scale-110 transition-transform duration-500">
          <span className={program.icon} />
        </div>

        {/* Content with proper text colors */}
        <h5 className="card-title group-hover:text-[var(--accent)] transition-colors duration-300">
          {program.title}
        </h5>

        <p className="card-description">{program.subtitle}</p>

        {/* Duration & Level Tags */}
        <div className="card-tags">
          <span
            className="card-tag hover:!bg-[var(--accent)] hover:!text-white transition-all duration-300"
            style={{
              background: isDark
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(59, 130, 246, 0.1)",
              color: "var(--accent)",
            }}
          >
            <i className="far fa-clock mr-1"></i>
            {program.duration}
          </span>
          <span
            className="card-tag hover:!bg-[#22c55e] hover:!text-white transition-all duration-300"
            style={{
              background: isDark
                ? "rgba(34, 197, 94, 0.2)"
                : "rgba(34, 197, 94, 0.1)",
              color: "#22c55e",
            }}
          >
            <i className="fas fa-signal mr-1"></i>
            {program.level}
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-2 my-4">
          {program.features.slice(0, 3).map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <i
                className="fas fa-check text-xs"
                style={{ color: "var(--accent)" }}
              ></i>
              {feature}
            </li>
          ))}
        </ul>

        {/* Status indicator with animation */}
        <div
          className="flex items-center gap-3 mt-3 pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--gradient-start)" }}
          />
          <span
            className="text-[9px] font-tech tracking-[0.4em] uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            Available Now
          </span>
        </div>

        {/* Apply Now Button - Styled with accent color matching Learn More */}
        <div className="mt-3">
          <Link
            href={program.buttonLink}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
            style={{
              background: "var(--accent)",
              color: "white",
              borderRadius: "6px",
            }}
          >
            <span>{program.buttonText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Approach Card with Services component styling
const ApproachCard = ({
  approach,
  index,
  className,
  style,
  isDark,
}: {
  approach: any;
  index: number;
  className: string;
  style: React.CSSProperties;
  isDark: boolean;
}) => {
  return (
    <div className={className} style={style}>
      <div
        className={`service-card programs-card-height h-full group relative overflow-hidden ${isDark ? "border-white/5" : ""}`}
      >
        {/* Ambient glow effect for dark mode */}
        {isDark && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)",
            }}
          />
        )}

        {/* Corner marker - architectural detail */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1"
          aria-hidden="true"
        >
          <div className="w-2 h-px bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
          <div className="w-px h-2 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
        </div>

        {/* Card Number with epoch styling */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] font-tech tracking-[0.5em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Micro label */}
          <span
            className="text-[8px] font-tech tracking-[0.3em] uppercase px-2 py-1 rounded"
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : "var(--muted)",
              color: "var(--muted-foreground)",
            }}
          >
            Approach
          </span>
        </div>

        {/* Icon with gradient background */}
        <div className="service-icon mb-4 group-hover:scale-110 transition-transform duration-500">
          <span className={approach.icon} />
        </div>

        {/* Content with proper text colors */}
        <h5 className="card-title group-hover:text-[var(--accent)] transition-colors duration-300">
          {approach.title}
        </h5>

        <p className="card-description">{approach.description}</p>

        {/* Status indicator with animation */}
        <div
          className="flex items-center gap-3 mt-4 pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--gradient-start)" }}
          />
          <span
            className="text-[9px] font-tech tracking-[0.4em] uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            Core Value
          </span>
        </div>

        {/* Hover action hint */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span
            className="text-[10px] font-tech tracking-wider flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            Learn More
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndustrialPrograms;
