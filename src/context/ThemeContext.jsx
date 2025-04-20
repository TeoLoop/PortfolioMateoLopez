import React, { createContext, useState, useContext } from 'react';

// Crea el contexto para el tema
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // El tema inicial es claro

  // Alternar entre los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para consumir el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
