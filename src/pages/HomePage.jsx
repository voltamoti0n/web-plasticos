// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import FullScreenCarousel from '../components/sections/FullScreenCarousel';
import HomeSection from '../components/sections/HomeSection';
import ApplicationsSection from '../components/sections/ApplicationsSection';
import CallToActionSection from '../components/sections/CallToActionSection';
import AnimatedSection from '../components/common/AnimatedSection';
import ParallaxVideoSection from '../components/sections/ParallaxVideoSection';
import ModelSection from '../components/sections/ModelSection'; // <-- Aseguramos que esté importado
import StatsSection from '../components/sections/StatsSection';

// ASSETS
import slide1_bg from '/src/assets/images/contenedor_2.jpeg';
import slide2_bg from '/src/assets/images/contenedor_7.jpeg';
import slide3_bg from '/src/assets/images/contenedor_4.jpeg';
import slide4_bg from '/src/assets/images/contenedor_5.jpeg';
import processImage from '/src/assets/images/contenedor_1.jpeg';
import video_bg from '/src/assets/videos/video_contenedor.mov';

const slideData = [
  { type: 'scroll', target: 'quienes-somos-home', background: slide1_bg, title: 'La Revolución del Almacenamiento', description: 'Ingeniería de materiales compuestos que redefine los estándares de eficiencia, seguridad y rentabilidad.', buttonText: 'Descubrir PRFV' },
  { type: 'link', target: '/productos', background: slide2_bg, title: 'Inmunidad Absoluta a la Corrosión', description: 'Nuestros tanques son inherentemente resistentes a los químicos más agresivos, eliminando la principal causa de fallas.', buttonText: 'Ver Ventajas' },
  { type: 'link', target: '/procesos', background: slide3_bg, title: 'Ingeniería de Precisión', description: 'Cada tanque es un sistema de ingeniería fabricado bajo la estricta norma ASTM D3299 para una fiabilidad total.', buttonText: 'Conocer Proceso' },
  { type: 'link', target: '/contacto', background: slide4_bg, title: '¿Listo para un Proyecto?', description: 'Nuestro equipo está listo para diseñar su próxima solución de almacenamiento a medida.', buttonText: 'Contactar Ahora' },
];

function HomePage() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCarouselClick = (type, target) => {
    if (type === 'link') {
      navigate(target);
    } else {
      scrollToSection(target);
    }
  };
  
  return (
    <>
      <Header />
      <FullScreenCarousel slides={slideData} onButtonClick={handleCarouselClick} />
      <ScrollToTop />
      <main className="scroll-container">
        <div className="content-wrapper">
          
          <StatsSection id="quienes-somos-home" />

          <AnimatedSection>
            <ParallaxVideoSection videoSrc={video_bg} />
          </AnimatedSection>
          
          {/* --- AQUÍ REINSERTAMOS EL MODELO 3D --- */}
          <AnimatedSection>
            <ModelSection
              id="productos-home"
              title="Superioridad Técnica Demostrada"
              subtitle="Cero Corrosión. Cero Mantenimiento. Cero Preocupaciones."
              content="Nuestros productos ofrecen una combinación inigualable de durabilidad y un costo de ciclo de vida drásticamente inferior. Interactúe con nuestro modelo y observe de cerca la calidad que nos define."
              reverse={true}
            />
          </AnimatedSection>
          
          <AnimatedSection>
            <ApplicationsSection id="aplicaciones" />
          </AnimatedSection>
          
          <AnimatedSection>
            <HomeSection
              id="procesos-home"
              title="Excelencia en Ingeniería"
              subtitle="No es solo un tanque, es un sistema de ingeniería de precisión."
              content="Utilizamos procesos de vanguardia como el Filament Winding y cumplimos rigurosamente con estándares como ASTM D3299 para garantizar una fiabilidad y seguridad absolutas."
              image={processImage}
              linkTo="/procesos"
            />
          </AnimatedSection>
          
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;