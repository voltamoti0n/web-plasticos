// src/App.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/common/Loader';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import FullScreenCarousel from './components/sections/FullScreenCarousel';
import HomeSection from './components/sections/HomeSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import CallToActionSection from './components/sections/CallToActionSection';
import AnimatedSection from './components/common/AnimatedSection';
import ParallaxVideoSection from './components/sections/ParallaxVideoSection';
import ModelSection from './components/sections/ModelSection';
import './App.css';

// ASSETS
import slide1_bg from './assets/images/contenedor_2.jpeg';
import slide2_bg from './assets/images/contenedor_7.jpeg';
import slide3_bg from './assets/images/contenedor_4.jpeg';
import slide4_bg from './assets/images/contenedor_5.jpeg';
import aboutImage from './assets/images/contenedor_8.jpg';
// productsImage ya no se usa aquí, se moverá o eliminará si es necesario.
import processImage from './assets/images/contenedor_1.jpeg';
import video_bg from './assets/videos/video_contenedor.mov';

// --- Contenido actualizado para el carrusel y las secciones ---
const slideData = [
  { type: 'scroll', target: 'quienes-somos', background: slide1_bg, title: 'La Revolución del Almacenamiento', description: 'Ingeniería de materiales compuestos que redefine los estándares de eficiencia, seguridad y rentabilidad.', buttonText: 'Descubrir PRFV' },
  { type: 'scroll', target: 'productos', background: slide2_bg, title: 'Inmunidad Absoluta a la Corrosión', description: 'Nuestros tanques son inherentemente resistentes a los químicos más agresivos, eliminando la principal causa de fallas.', buttonText: 'Ver Ventajas' },
  { type: 'scroll', target: 'procesos', background: slide3_bg, title: 'Ingeniería de Precisión', description: 'Cada tanque es un sistema de ingeniería fabricado bajo la estricta norma ASTM D3299 para una fiabilidad total.', buttonText: 'Conocer Proceso' },
  { type: 'scroll', target: 'contacto', background: slide4_bg, title: '¿Listo para un Proyecto?', description: 'Nuestro equipo está listo para diseñar su próxima solución de almacenamiento a medida.', buttonText: 'Contactar Ahora' },
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
          {/* SECCIÓN 1: "Quiénes Somos" */}
          <AnimatedSection>
            <HomeSection
              id="quienes-somos"
              title="Líderes en Almacenamiento Industrial"
              subtitle="Cambiamos las reglas del juego."
              content="El PRFV no es un sustituto del acero; es una mejora fundamental. Ofrecemos soluciones de almacenamiento que eliminan la corrosión, el mantenimiento constante y los riesgos de seguridad, redefiniendo la eficiencia de la industria moderna."
              image={aboutImage}
              linkTo="quienes-somos"
            />
          </AnimatedSection>
          
          {/* SECCIÓN 2: Video Parallax */}
          <AnimatedSection>
            <ParallaxVideoSection videoSrc={video_bg} />
          </AnimatedSection>
          
          {/* SECCIÓN 3: Modelo 3D con contenido fusionado */}
          <AnimatedSection>
            <ModelSection
              id="productos" // Le asignamos el ID de productos para la navegación
              title="Superioridad Técnica Demostrada"
              subtitle="Cero Corrosión. Cero Mantenimiento. Cero Preocupaciones."
              content="Nuestros productos ofrecen una combinación inigualable de durabilidad extrema y un costo de ciclo de vida drásticamente inferior. Interactúe con nuestro modelo y observe de cerca la calidad que define a la inversión inteligente que se paga sola."
              reverse={true} // Hacemos que el modelo aparezca a la derecha
            />
          </AnimatedSection>
          
          {/* SECCIÓN 4: Aplicaciones */}
          <AnimatedSection>
            <ApplicationsSection id="aplicaciones" />
          </AnimatedSection>
          
          {/* SECCIÓN 5: Procesos */}
          <AnimatedSection>
            <HomeSection
              id="procesos"
              title="Excelencia en Ingeniería"
              subtitle="No es solo un tanque, es un sistema de ingeniería de precisión."
              content="Utilizamos procesos de vanguardia como el Filament Winding controlado por computadora y cumplimos rigurosamente con estándares como ASTM D3299 para garantizar una fiabilidad y seguridad absolutas en cada pieza."
              image={processImage}
              linkTo="procesos"
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

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div className={`app-wrapper ${!isLoading ? 'visible' : ''}`}>
        <AppContent />
      </div>
    </>
  );
}

export default App;