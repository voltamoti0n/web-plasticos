// src/pages/ProcessPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import './StaticPage.css';


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
            <p>Es el corazón de nuestra excelencia estructural...</p>
          </div>
        </div>
        <div className="process-step reverse">
          <img src={linerImage} alt="Detalle de la barrera anticorrosiva" className="process-image" />
          <div className="process-text">
            <h3>La Barrera Anticorrosiva (Liner)</h3>
            <p>La longevidad en entornos químicos depende de nuestro escudo interno...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessPage;