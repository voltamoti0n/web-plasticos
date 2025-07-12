// src/pages/ProcessPage.jsx
import React from 'react';
import Header from '../components/common/Header'; // Importamos Header aquí
import AnimatedSection from '../components/common/AnimatedSection';
import './StaticPage.css';
import filamentWinding from/src/assets/images/contenedor_7.jpeg';
import linerImage from/src/assets/images/contenedor_4.jpeg';
import headerBg from/src/assets/images/contenedor_4.jpeg';

function ProcessPage() {
  return (
    <AnimatedSection>
      <Header />
      <div className="page-header-container" style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Proceso de Fabricación</h1>
          <p>Donde la ingeniería de precisión y los materiales de vanguardia se unen para crear una fiabilidad total.</p>
        </div>
      </div>

      <div className="page-content-body">
        <div className="static-content-wrapper">
          <p>La superioridad de un tanque de PRFV no solo radica en los materiales, sino en el proceso de ingeniería que los transforma en una estructura de alto rendimiento. Nuestro método garantiza que cada tanque sea un sistema cohesivo, seguro y duradero, fabricado bajo la estricta norma <strong>ASTM D3299</strong>.</p>

          <div className="process-step">
            <img src={filamentWinding} alt="Proceso de Filament Winding" className="process-image" />
            <div className="process-text">
              <h3>Filament Winding (Embobinado de Filamento)</h3>
              <p>Es el corazón de nuestra excelencia estructural. Este proceso automatizado consiste en enrollar filamentos continuos de fibra de vidrio, impregnados en resina, sobre un mandril giratorio. Controlado por computadora, nos permite una precisión absoluta en el ángulo, la tensión y el contenido de resina, orientando las fibras para optimizar la resistencia justo donde se necesita. Esto resulta en una relación resistencia-peso excepcional y una consistencia que los procesos manuales no pueden igualar.</p>
            </div>
          </div>

          <div className="process-step reverse">
            <img src={linerImage} alt="Detalle de la barrera anticorrosiva" className="process-image" />
            <div className="process-text">
              <h3>La Barrera Anticorrosiva (Liner)</h3>
              <p>La longevidad en entornos químicos depende de nuestro escudo interno. Antes del embobinado estructural, aplicamos una barrera de múltiples capas rica en resina. La primera capa, un velo químico, ofrece una superficie lisa y casi pura de resina al fluido. La segunda, reforzada con fibra cortada, previene la propagación de microfisuras. Esta construcción dual es fundamental: la barrera química protege la estructura, y la estructura soporta la barrera, garantizando décadas de servicio sin fallas.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ProcessPage;