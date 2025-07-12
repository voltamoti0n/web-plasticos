// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../components/common/Header'; // Importamos Header aquí
import AnimatedSection from '../components/common/AnimatedSection';
import HomeSection from '../components/sections/HomeSection';
import './StaticPage.css';
import newImage from '/src/assets/images/contenedor_6.jpeg';
import headerBg from '/src/assets/images/contenedor_2.jpeg';

function AboutPage() {
  return (
    <AnimatedSection>
      <Header />
      <div className="page-header-container" style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Quiénes Somos</h1>
          <p>Redefiniendo los estándares de eficiencia, seguridad y rentabilidad en el almacenamiento industrial.</p>
        </div>
      </div>
      
      <div className="page-content-body">
        <div className="static-content-wrapper">
          <p>Durante décadas, la industria ha dependido de materiales tradicionales, aceptando la corrosión y el mantenimiento constante como un costo inevitable. En Plásticos Anticorrosivos, hemos cambiado radicalmente las reglas del juego. No ofrecemos un simple sustituto del acero; presentamos una mejora fundamental a través de la ingeniería de materiales compuestos.</p>
          <p>Nuestro equipo está compuesto por ingenieros, técnicos y especialistas apasionados por la ciencia del Plástico Reforzado con Fibra de Vidrio (PRFV). Cada tanque que fabricamos es el resultado de un compromiso inquebrantable con la calidad, la innovación y el cumplimiento de los más altos estándares, como la norma ASTM D3299, para garantizar una fiabilidad total y una vida útil que supera con creces cualquier alternativa tradicional.</p>
          <h3>Nuestra Filosofía</h3>
          <p>Creemos que un producto superior nace de un proceso de ingeniería superior. Por eso, invertimos constantemente en tecnología de punta como el <strong>Filament Winding</strong> (embobinado de filamento) y en la capacitación continua de nuestro personal. No solo vendemos productos; construimos relaciones a largo plazo con nuestros clientes, actuando como sus socios estratégicos para garantizar la seguridad, eficiencia y rentabilidad de sus operaciones. Nuestra misión es entregar tranquilidad a través de la ingeniería de precisión.</p>
        </div>
        <HomeSection
            title="Una Inversión Inteligente"
            subtitle="La decisión que se paga sola."
            content="Adoptar el PRFV no es solo una decisión técnica; es una decisión empresarial con visión de futuro. Una inversión estratégica en la fiabilidad y sostenibilidad de sus operaciones que se traduce en décadas de ahorro y rendimiento predecible."
            image={newImage}
            reverse={true}
        />
      </div>
    </AnimatedSection>
  );
}

export default AboutPage;