// src/App.jsx
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // <-- LÍNEA ELIMINADA
import Loader from './components/common/Loader';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import FullScreenCarousel from './components/sections/FullScreenCarousel';
import HomeSection from './components/sections/HomeSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import CallToActionSection from './components/sections/CallToActionSection';
import AnimatedSection from './components/common/AnimatedSection';
import './App.css';

// ASSETS
import slide1_bg from './assets/images/contenedor_2.jpeg';
import slide2_bg from './assets/images/contenedor_7.jpeg';
import slide3_bg from './assets/images/contenedor_4.jpeg';
import slide4_bg from './assets/images/contenedor_5.jpeg';
import aboutImage from './assets/images/contenedor_8.jpg';
import productsImage from './assets/images/contenedor_9.jpg';
import processImage from './assets/images/contenedor_1.jpeg';

// --- CORRECCIÓN: Eliminamos el tipo 'link' para que solo haya 'scroll' ---
const slideData = [
  { type: 'scroll', target: 'quienes-somos', background: slide1_bg, title: 'Soluciones a Medida', description: 'Ingeniería de vanguardia para los desafíos industriales más complejos.', buttonText: 'Explorar Empresa' },
  { type: 'scroll', target: 'productos', background: slide2_bg, title: 'Productos Superiores', description: 'Descubra por qué nuestros tanques superan al acero en durabilidad y costo.', buttonText: 'Ver Productos' },
  { type: 'scroll', target: 'procesos', background: slide3_bg, title: 'Fabricación de Precisión', description: 'Tecnología y experiencia que garantizan una fiabilidad total en cada pieza.', buttonText: 'Conocer Proceso' },
  { type: 'scroll', target: 'contacto', background: slide4_bg, title: '¿Listo para un Proyecto?', description: 'Nuestro equipo de ingenieros está listo para diseñar su próxima solución.', buttonText: 'Contactar Ahora' },
];

function AppContent() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // --- CORRECCIÓN: La función ahora solo necesita hacer scroll ---
  const handleCarouselClick = (target) => {
    scrollToSection(target);
  };
  
  return (
    <>
      <Header onNavClick={scrollToSection} />
      <FullScreenCarousel slides={slideData} onButtonClick={handleCarouselClick} />
      <ScrollToTop />
      <main className="scroll-container">
        <div className="content-wrapper">
          <AnimatedSection>
            <HomeSection
              id="quienes-somos"
              title="Quiénes Somos"
              subtitle="Líderes en la fabricación de soluciones de PRFV."
              content="Nos dedicamos a ofrecer soluciones de almacenamiento que superan los límites de los materiales tradicionales..."
              image={aboutImage}
            />
          </AnimatedSection>
          <AnimatedSection>
            <HomeSection
              id="productos"
              title="Productos de Alto Rendimiento"
              subtitle="Inmunidad a la corrosión, vida útil extendida y cero mantenimiento."
              content="Nuestros productos de PRFV eliminan los costos ocultos del acero..."
              image={productsImage}
              reverse={true}
            />
          </AnimatedSection>
          <AnimatedSection>
            <ApplicationsSection id="aplicaciones" />
          </AnimatedSection>
          <AnimatedSection>
            <HomeSection
              id="procesos"
              title="Proceso de Fabricación"
              subtitle="Donde la tecnología y la experiencia se unen."
              content="Utilizamos procesos de vanguardia como el Filament Winding..."
              image={processImage}
            />
          </AnimatedSection>
          <CallToActionSection />
        </div>
      </main>
      <Footer onNavClick={scrollToSection} />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove('loading');
      const timer = setTimeout(() => setIsReady(true), 50);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.add('loading');
    }
  }, [isLoading]);

  return (
    <>
      <Loader onLoaded={() => setIsLoading(false)} />
      <div className={`app-wrapper ${isReady ? 'visible' : ''}`}>
        <AppContent />
      </div>
    </>
  );
}

export default App;