import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';

function App() {
  const { theme, toggleTheme } = useTheme();

  // Cambia la clase del body al tema actual
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
