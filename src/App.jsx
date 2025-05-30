import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { useTheme } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import Loader from './components/Loader'; // Asegúrate de tener este archivo creado
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experiencia from './pages/Experiencia';  
// Importar el componente
function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Tema
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Simulación de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${theme}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experiencia' element={<Experiencia />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
