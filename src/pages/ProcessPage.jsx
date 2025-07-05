// src/pages/ProcessPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import './StaticPage.css';
import filamentWinding from '../assets/images/contenedor_8.jpg';
import linerImage from '../assets/images/contenedor_7.jpeg';

function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Proceso de Fabricación"
        subtitle="Donde la ingeniería de precisión y los materiales de vanguardia se unen."
      />
      <div className="static-content-wrapper">
        <div className="process-step">
          <img src={filamentWinding} alt="Proceso de Filament Winding" className="process-image" />
          <div className="process-text">
            <h3>Filament Winding (Embobinado de Filamento)</h3>
            <p>Es el corazón de nuestra excelencia estructural. Este proceso automatizado y controlado por computadora enrolla filamentos continuos de fibra de vidrio impregnados en resina sobre un mandril giratorio. Esto nos permite un control absoluto sobre el ángulo, la tensión y la cantidad de resina, creando un laminado con una relación resistencia-peso muy superior a la del acero y una consistencia imposible de lograr manualmente.</p>
          </div>
        </div>
        <div className="process-step reverse">
          <img src={linerImage} alt="Detalle de la barrera anticorrosiva" className="process-image" />
          <div className="process-text">
            <h3>La Barrera Anticorrosiva (Liner)</h3>
            <p>La longevidad en entornos químicos depende de nuestro escudo interno. Antes del embobinado estructural, aplicamos una barrera multi-capa rica en resina de Viniléster. Esta capa es la primera y más crucial línea de defensa contra el ataque químico, creando una superficie lisa que previene microfisuras y garantiza décadas de servicio sin preocupaciones, todo bajo la estricta norma ASTM D3299.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessPage;