import { useEffect, useRef } from 'react';

/**
 * Adds a `.is-visible` class to the element once it scrolls into view.
 * Pairs with the `.reveal` utility classes defined in app.scss to produce
 * GSAP-style fade / slide-up entrances driven purely by CSS transitions.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.18, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
