// src/pages/ProductsPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import './StaticPage.css';
import '../components/sections/SectionStyles.css';

function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Productos y Comparativa"
        subtitle="Soluciones de PRFV diseñadas para superar al acero en cada métrica de rendimiento."
      />
      <div className="static-content-wrapper">
        <p>Nuestra gama de productos está diseñada para ofrecer una alternativa superior al acero y otros materiales tradicionales. La principal ventaja de nuestros tanques y componentes de PRFV es su inmunidad total a la corrosión, lo que se traduce en una vida útil más larga, cero mantenimiento y una seguridad operativa inigualable. A continuación, se presenta una comparación directa que resalta los beneficios clave.</p>
        
        <div className="comparison-table-wrapper" style={{ marginTop: '3rem' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>PRFV (Nuestra Solución)</th>
                <th>Acero al Carbón</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Resistencia a la Corrosión</strong></td>
                <td className="positive">Inmune por naturaleza. Cero fallas.</td>
                <td className="negative">Muy pobre. Requiere mantenimiento constante.</td>
              </tr>
              <tr>
                <td><strong>Peso</strong></td>
                <td className="positive">Excepcionalmente ligero (4-5 veces menos).</td>
                <td className="negative">Muy pesado. Altos costos de instalación.</td>
              </tr>
              <tr>
                <td><strong>Mantenimiento</strong></td>
                <td className="positive">Prácticamente nulo. "Mantenimiento Cero".</td>
                <td className="negative">Constante y costoso (sandblast, pintura).</td>
              </tr>
              <tr>
                <td><strong>Vida Útil (Ambiente Corrosivo)</strong></td>
                <td className="positive">Excepcional (+30 a 50 años).</td>
                <td className="negative">Limitada (7 a 20 años).</td>
              </tr>
              <tr>
                <td><strong>Costo de Instalación</strong></td>
                <td className="positive">Bajo. Sin soldadura, grúas pequeñas.</td>
                <td className="negative">Alto. Grúas grandes, soldadores, permisos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;