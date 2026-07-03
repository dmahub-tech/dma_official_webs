'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/dva/context/ThemeContext";

// Chevron icon for dropdown
const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

// Theme Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const Navbar = ({ defaultLogoTheme = 'light' }: { defaultLogoTheme?: string }) => {
  const [logoTheme, setLogoTheme] = useState(defaultLogoTheme);
  const [programsOpen, setProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const { theme, resolvedTheme, cycleTheme } = useTheme();

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        setLogoTheme("dark");
      } else {
        navbar.classList.remove("nav-scroll");
        if (defaultLogoTheme === 'light') {
          setLogoTheme("light");
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [defaultLogoTheme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setLogoTheme('dark');
    } else if (defaultLogoTheme === 'light' && window.pageYOffset <= 300) {
      setLogoTheme('light');
    }
  }, [resolvedTheme, defaultLogoTheme]);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon />;
      case 'dark':
        return <MoonIcon />;
      case 'system':
        return <MonitorIcon />;
      default:
        return <SunIcon />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${resolvedTheme === 'dark' ? 'dark' : ''}`} ref={navbarRef}>
      <div className="container">
        {/* Logo - Left Side */}
        <Link className="navbar-brand" href="/">
          <div className="logo">
            {resolvedTheme === 'dark' ? (
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
          </div>
        </Link>

        {/* Mobile Toggler with theme-aware icon */}
        <button
          className={`navbar-toggler ${resolvedTheme === 'dark' ? 'text-white' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Nav Items - Center */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/course" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item dropdown" ref={dropdownRef}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setProgramsOpen(!programsOpen)}
                aria-expanded={programsOpen}
              >
                Programs
                <span className={`dropdown-icon ${programsOpen ? 'rotate' : ''}`}>
                  <ChevronIcon />
                </span>
              </button>
              <div className={`dropdown-menu ${programsOpen ? 'show' : ''}`}>
                <Link 
                  href="/programs/industrial-training" 
                  className="dropdown-item"
                  onClick={() => setProgramsOpen(false)}
                >
                  <span className="item-title">Industrial Training</span>
                  <span className="item-subtitle">Industry-ready skills</span>
                </Link>
                <Link 
                  href="/programs/internship" 
                  className="dropdown-item"
                  onClick={() => setProgramsOpen(false)}
                >
                  <span className="item-title">Internship Program</span>
                  <span className="item-subtitle">Real-world experience</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Theme Toggle - Far Right */}
        <button
          className="theme-toggle ms-3 d-none d-lg-flex"
          onClick={cycleTheme}
          aria-label={getThemeLabel()}
          title={getThemeLabel()}
        >
          {getThemeIcon()}
        </button>

        {/* Theme Toggle - Mobile (visible on smaller screens) */}
        <button
          className="theme-toggle d-lg-none"
          onClick={cycleTheme}
          aria-label={getThemeLabel()}
          title={getThemeLabel()}
        >
          {getThemeIcon()}
        </button>
      </div>
    </nav>
  )
}

export default Navbar;