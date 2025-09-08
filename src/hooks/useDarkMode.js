import { useState, useEffect, useLayoutEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? (saved === 'dark' ? 'dark' : 'light') : 'dark';
    }
    return 'dark';
  });
  // Apply theme synchronously on mount using useLayoutEffect
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    root.classList.remove('light', 'dark');
    if (savedTheme === 'dark' || !savedTheme) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'dark') {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.location.reload();
  };

  return { theme, toggleTheme };
};
