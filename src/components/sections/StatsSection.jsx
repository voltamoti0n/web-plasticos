// src/components/sections/StatsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './StatsSection.css'; // Crearemos este archivo CSS

// Componente reutilizable para el contador animado
function Counter({ from, to, suffix }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString('en-US');
        }
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={nodeRef} />;
}


const statsData = [
  { value: 50, suffix: '%', label: 'Ahorro en Costo de Ciclo de Vida', description: 'Menos mantenimiento y mayor vida útil se traducen en un ahorro total de hasta el 50% vs. el acero.' },
  { value: 75, suffix: '%', label: 'Más Ligero que el Acero', description: 'Reduce drásticamente los costos de transporte, cimentación y mano de obra durante la instalación.' },
  { value: 50, suffix: '+', label: 'Años de Vida Útil', description: 'Nuestros tanques están diseñados para durar décadas, eliminando la necesidad de reemplazos costosos y frecuentes.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const StatsSection = ({ id }) => {
  return (
    <div id={id} className="stats-section-container">
      <div className="stats-section-content">
        <div className="stats-header">
          <h2 className="section-title">Líderes en Almacenamiento Industrial</h2>
          <p className="section-subtitle">El PRFV no es un sustituto del acero; es una mejora fundamental. Los números lo demuestran.</p>
        </div>
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <motion.div 
              className="stat-card"
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="stat-value">
                <Counter from={0} to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;