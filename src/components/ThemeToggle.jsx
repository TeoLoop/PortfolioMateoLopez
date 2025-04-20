import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};
