// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenCarousel from '../components/sections/FullScreenCarousel';
import HomeSection from '../components/sections/HomeSection';
import ApplicationsSection from '../components/sections/ApplicationsSection';
import CallToActionSection from '../components/sections/CallToActionSection';
import AnimatedSection from '../components/common/AnimatedSection';

// ASSETS
import slide1_bg from '../assets/images/contenedor_2.jpeg';
import slide2_bg from '../assets/images/contenedor_7.jpeg';
import slide3_bg from '../assets/images/contenedor_4.jpeg';
import slide4_bg from '../assets/images/contenedor_5.jpeg';
import aboutImage from '../assets/images/contenedor_8.jpg';
import productsImage from '../assets/images/contenedor_9.jpg';
import processImage from '../assets/images/contenedor_1.jpeg';

const slideData = [
  { type: 'scroll', target: 'quienes-somos', background: slide1_bg, title: 'Soluciones a Medida', description: 'Ingeniería de vanguardia para los desafíos industriales más complejos.', buttonText: 'Explorar Empresa' },
  { type: 'scroll', target: 'productos', background: slide2_bg, title: 'Productos Superiores', description: 'Descubra por qué nuestros tanques superan al acero en durabilidad y costo.', buttonText: 'Ver Productos' },
  { type: 'scroll', target: 'procesos', background: slide3_bg, title: 'Fabricación de Precisión', description: 'Tecnología y experiencia que garantizan una fiabilidad total en cada pieza.', buttonText: 'Conocer Proceso' },
  { type: 'link', target: '/contacto', background: slide4_bg, title: '¿Listo para un Proyecto?', description: 'Nuestro equipo de ingenieros está listo para diseñar su próxima solución.', buttonText: 'Contactar Ahora' },
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
      {/* El carrusel es parte del contenido de la página de inicio */}
      <FullScreenCarousel slides={slideData} onButtonClick={handleCarouselClick} />

      {/* El contenedor de scroll también es parte del contenido de esta página */}
      <main className="scroll-container">
        <div className="content-wrapper">
          <AnimatedSection>
            <HomeSection
              id="quienes-somos"
              title="Quiénes Somos"
              subtitle="Líderes en la fabricación de soluciones de PRFV."
              content="Nos dedicamos a ofrecer soluciones de almacenamiento que superan los límites de los materiales tradicionales, combinando décadas de experiencia con un compromiso inquebrantable con la calidad y la norma ASTM D3299."
              image={aboutImage}
              linkTo="/quienes-somos"
            />
          </AnimatedSection>
          <AnimatedSection>
            <HomeSection
              id="productos"
              title="Productos de Alto Rendimiento"
              subtitle="Inmunidad a la corrosión, vida útil extendida y cero mantenimiento."
              content="Nuestros productos de PRFV eliminan los costos ocultos del acero. Son hasta 75% más ligeros, reduciendo drásticamente los costos de instalación y cimentación, y garantizan décadas de operación sin preocupaciones."
              image={productsImage}
              linkTo="/productos"
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
              content="Utilizamos procesos de vanguardia como el Filament Winding y barreras anticorrosivas multi-capa para asegurar que cada tanque no solo cumpla, sino que exceda las expectativas de rendimiento y longevidad en los entornos más agresivos."
              image={processImage}
              linkTo="/procesos"
            />
          </AnimatedSection>
          <CallToActionSection />
        </div>
      </main>
    </>
  );
}

export default HomePage;