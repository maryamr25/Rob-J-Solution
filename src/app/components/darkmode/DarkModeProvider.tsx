'use client';

import { useEffect, useState } from 'react';

export function DarkModeProvider() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check initial mode
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);

      // Listen for changes
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      darkModeQuery.addEventListener('change', handleChange);

      // Cleanup listener
      return () => {
        darkModeQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  // Dynamically set class on the `html` element
  useEffect(() => {
    const root = document.documentElement; // The `html` element
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return null; // This component doesn't render anything
}
