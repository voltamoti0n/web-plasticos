// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts y Páginas
import Loader from './components/common/Loader';
import StandardPageLayout from './components/common/StandardPageLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // El loader solo se muestra en la carga inicial de la página de inicio
  const handleLoaded = () => {
    sessionStorage.setItem('loaderShown', 'true');
    setIsLoading(false);
  };
  const isLoaderAlreadyShown = sessionStorage.getItem('loaderShown') === 'true';

  return (
    <>
      <AnimatePresence>
        {isLoading && !isLoaderAlreadyShown && <Loader onLoaded={handleLoaded} />}
      </AnimatePresence>
      
      <div className={`app-wrapper ${isLoading && !isLoaderAlreadyShown ? '' : 'visible'}`}>
        <Routes location={location} key={location.pathname}>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={<HomePage />} />

            {/* Rutas para las páginas internas que usan el layout estándar */}
            <Route element={<StandardPageLayout />}>
              <Route path="/quienes-somos" element={<AboutPage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/procesos" element={<ProcessPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;