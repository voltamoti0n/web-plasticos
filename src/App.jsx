// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollToTopPage from './components/common/ScrollToTopPage';
import './App.css';

// Importamos las PÁGINAS, que ahora son solo el CONTENIDO
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  // El layout especial de la página de inicio se determina por la ruta
  const isHomePage = location.pathname === '/';

  return (
    // El div page-wrapper ahora controla la visibilidad y el fondo inicial
    <div className="page-wrapper visible">
      <Header />
      <ScrollToTopPage /> {/* Sube el scroll al cambiar de página */}
      
      {/* El main es el contenedor principal que cambia */}
      <main className={isHomePage ? '' : 'page-content-wrapper'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/procesos" element={<ProcessPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;