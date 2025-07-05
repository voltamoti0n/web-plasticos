// src/pages/AboutPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import './StaticPage.css';

// Este componente ahora solo retorna el CONTENIDO específico de la página
function AboutPage() {
  return (
    <>
      <PageHeader
        title="Quiénes Somos"
        subtitle="Líderes en la fabricación de soluciones de PRFV para los desafíos industriales más exigentes."
      />
      <div className="static-content-wrapper">
        <p>Desde nuestra fundación, en Plásticos Anticorrosivos S.A. de C.V. nos hemos dedicado a una sola misión: ofrecer soluciones de almacenamiento y conducción de fluidos que superen los límites de los materiales tradicionales. Entendemos que en la industria moderna, la fiabilidad no es un lujo, sino una necesidad operativa.</p>
        <p>Nuestro equipo está compuesto por ingenieros, técnicos y especialistas apasionados por la ciencia de los materiales compuestos. Cada tanque, tubería o pieza especial que sale de nuestra planta es el resultado de décadas de experiencia, un compromiso inquebrantable con la calidad y la aplicación de los más altos estándares de ingeniería, como la norma ASTM D3299.</p>
        <h3>Nuestra Filosofía</h3>
        <p>Creemos que un producto superior nace de un proceso superior. Por eso, invertimos constantemente en tecnología de punta como el Filament Winding (embobinado de filamento) y en la capacitación de nuestro personal. No solo vendemos productos; construimos relaciones a largo plazo con nuestros clientes, actuando como sus socios estratégicos para garantizar la seguridad, eficiencia y rentabilidad de sus operaciones.</p>
      </div>
    </>
  );
}

export default AboutPage;