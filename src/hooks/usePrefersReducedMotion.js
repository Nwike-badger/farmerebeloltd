import { useState, useEffect } from 'react';

// This query checks if the user has a preference for reduced motion.
const QUERY = '(prefers-reduced-motion: no-preference)';

/**
 * A custom React hook that detects a user's preference for reduced motion.
 * @returns {boolean} - True if the user prefers reduced motion, false otherwise.
 */
export function usePrefersReducedMotion() {
  // We default to true (motion is reduced) to be safe,
  // and then set the actual value in useEffect.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    
    // Set the initial value
    setPrefersReducedMotion(!mediaQuery.matches);

    // Listen for changes
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    
    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return prefersReducedMotion;
}