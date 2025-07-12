// src/pages/ProductsPage.jsx
import React from 'react';
import Header from '../components/common/Header'; // Importamos Header aquí
import AnimatedSection from '../components/common/AnimatedSection';
import '../components/sections/SectionStyles.css';
import './StaticPage.css';
import headerBg from '../assets/images/contenedor_7.jpeg';

function ProductsPage() {
  return (
    <AnimatedSection>
      <Header />
      <div className="page-header-container" style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Productos y Ventajas</h1>
          <p>Descubra por qué el PRFV supera al acero en cada métrica de rendimiento relevante.</p>
        </div>
      </div>

      <div className="page-content-body">
        <div className="static-content-wrapper">
          <p>Nuestra gama de productos de PRFV está diseñada para ofrecer una alternativa superior al acero. La ventaja no reside en un solo punto, sino en una superioridad integral que abarca desde la inmunidad a la corrosión hasta una instalación más rápida y segura. A continuación, presentamos una comparación directa que resalta los beneficios clave para su operación.</p>
          
          <h3 style={{ textAlign: 'center', border: 'none', fontSize: '2.2rem', marginTop: '4rem' }}>PRFV vs. Acero: El Veredicto</h3>

          <div className="comparison-table-wrapper" style={{ marginTop: '2rem' }}>
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
                  <td className="feature-cell"><strong>Resistencia a la Corrosión</strong></td>
                  <td className="positive-cell">Inmune por naturaleza. Elimina la principal causa de fallas.</td>
                  <td className="negative-cell">Muy pobre. Requiere recubrimientos y mantenimiento constante.</td>
                </tr>
                <tr>
                  <td className="feature-cell"><strong>Peso (Densidad)</strong></td>
                  <td className="positive-cell">Excepcionalmente ligero (4-5 veces menos). Reduce costos de flete e instalación.</td>
                  <td className="negative-cell">Muy pesado. Altos costos de cimentación y grúas.</td>
                </tr>
                <tr>
                  <td className="feature-cell"><strong>Mantenimiento</strong></td>
                  <td className="positive-cell">Prácticamente nulo ("mantenimiento cero"). Se limita a inspecciones visuales.</td>
                  <td className="negative-cell">Constante y costoso (sandblast, repintado, paradas de planta).</td>
                </tr>
                <tr>
                  <td className="feature-cell"><strong>Costo de Instalación</strong></td>
                  <td className="positive-cell">Bajo. No requiere soldadura, permisos de trabajo en caliente ni equipos pesados.</td>
                  <td className="negative-cell">Alto. Requiere grúas grandes, soldadores certificados e inspecciones.</td>
                </tr>
                <tr>
                  <td className="feature-cell"><strong>Vida Útil (Ambiente Corrosivo)</strong></td>
                  <td className="positive-cell">Excepcionalmente larga (30 a 50+ años). Una inversión a largo plazo.</td>
                  <td className="negative-cell">Limitada (7 a 20 años antes de un reemplazo mayor).</td>
                </tr>
                <tr>
                  <td className="feature-cell"><strong>Conductividad</strong></td>
                  <td className="positive-cell">Aislante natural (térmico y eléctrico). Aumenta la seguridad operativa.</td>
                  <td className="negative-cell">Alto conductor. Requiere consideraciones de seguridad adicionales.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '3rem'}}>La conclusión es clara: en cualquier entorno donde la corrosión sea un factor, el costo total de propiedad de un tanque de PRFV a lo largo de su ciclo de vida es drásticamente menor. No es un gasto, es la compra de décadas de tranquilidad operativa y financiera.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ProductsPage;