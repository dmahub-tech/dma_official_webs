'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export type RevealClass = 'reveal' | 'reveal-up' | 'reveal-down' | 'reveal-left' | 'reveal-right' | 'reveal-scale' | 'reveal-fade' | 'reveal-flip';

export interface UseScrollRevealOptions {
  /** CSS class for the reveal animation type */
  revealClass?: RevealClass;
  /** Extra transition delay in milliseconds */
  revealDelay?: number;
  /** IntersectionObserver threshold (0-1) */
  revealThreshold?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
  /** Whether to trigger animation only once */
  triggerOnce?: boolean;
  /** Callback when element becomes visible */
  onReveal?: () => void;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const {
    revealClass = 'reveal',
    revealDelay = 0,
    revealThreshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    onReveal,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (revealDelay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasRevealed(true);
              onReveal?.();
            }, revealDelay);
          } else {
            setIsVisible(true);
            setHasRevealed(true);
            onReveal?.();
          }

          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      });
    },
    [revealDelay, triggerOnce, onReveal]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial animation class
    element.classList.add(revealClass);

    // Apply custom delay via CSS variable
    if (revealDelay > 0) {
      element.style.setProperty('--reveal-delay', `${revealDelay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            if (revealDelay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                setHasRevealed(true);
                onReveal?.();
              }, revealDelay);
            } else {
              setIsVisible(true);
              setHasRevealed(true);
              onReveal?.();
            }

            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!entry.isIntersecting && !triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: revealThreshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [revealClass, revealDelay, revealThreshold, rootMargin, handleIntersection]);

  // Compute the className based on visibility
  const className = `${revealClass} ${isVisible ? 'visible' : ''} ${hasRevealed ? 'has-revealed' : ''}`;

  return { ref, isVisible, hasRevealed, className };
}

// Hook for staggered children animations
export interface UseStaggerRevealOptions {
  /** Number of children to animate */
  count: number;
  /** Base delay between each child in milliseconds */
  staggerDelay?: number;
  /** Initial delay before first child animates */
  initialDelay?: number;
  /** Animation class for each child */
  revealClass?: RevealClass;
  /** IntersectionObserver threshold */
  revealThreshold?: number;
}

export function useStaggerReveal(options: UseStaggerRevealOptions) {
  const {
    count,
    staggerDelay = 100,
    initialDelay = 0,
    revealClass = 'reveal-up',
    revealThreshold = 0.1,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);

            // Stagger the animations
            for (let i = 0; i < count; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, initialDelay + i * staggerDelay);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: revealThreshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [count, staggerDelay, initialDelay, revealThreshold]);

  const getItemClassName = (index: number) => {
    return `${revealClass} ${visibleItems[index] ? 'visible' : ''}`;
  };

  const getItemStyle = (index: number): React.CSSProperties => {
    return {
      transitionDelay: `${initialDelay + index * staggerDelay}ms`,
    };
  };

  return {
    containerRef,
    visibleItems,
    hasRevealed,
    getItemClassName,
    getItemStyle,
  };
}

// Hook for scroll progress animations
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate progress based on element position in viewport
      const start = windowHeight;
      const end = -elementHeight;
      const current = elementTop;
      const rawProgress = (start - current) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, progress };
}

// Utility component props for easy reveal
export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  revealClass?: RevealClass;
  delay?: number;
  threshold?: number;
  as?: React.ElementType;
}
