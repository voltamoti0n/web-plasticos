// src/components/sections/ApplicationsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SectionStyles.css';
import iconQuimica from '../../assets/icons/quimica_icono.png';
import iconAgua from '../../assets/icons/agua_icono.png';
import iconAlimentos from '../../assets/icons/comida_icono.png';
import iconMineria from '../../assets/icons/mineria_icono.png';

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Transición más suave
};

const industries = [
    { name: 'Industria Química', desc: 'Tanques para ácidos, bases y solventes con máxima seguridad.', icon: iconQuimica },
    { name: 'Tratamiento de Agua', desc: 'Soluciones duraderas para plantas potabilizadoras y de tratamiento.', icon: iconAgua },
    { name: 'Alimentos y Bebidas', desc: 'Almacenamiento higiénico que cumple con los más altos estándares.', icon: iconAlimentos },
    { name: 'Minería', desc: 'Resistencia extrema a la abrasión y a los químicos agresivos del sector.', icon: iconMineria },
];

const ApplicationsSection = ({ id }) => {
  return (
    <div id={id} className="section-container dark-section">
      <div className="section-content">
        <motion.div className="text-content left-align" variants={titleVariants}>
          <h2 className="section-title">Una Solución, Múltiples Industrias</h2>
          <p className="section-subtitle">Nuestra tecnología de PRFV es la elección confiable para los sectores más exigentes.</p>
        </motion.div>
        <motion.div className="applications-grid" variants={gridVariants}>
          {industries.map((industry) => (
            <motion.div
              className="application-card"
              key={industry.name}
              variants={itemVariants}
              // --- CORRECCIÓN: Animación de hover más sutil ---
              whileHover={{ scale: 1.05, y: -5 }} // Eliminamos la transición tipo 'spring'
              transition={{ duration: 0.3 }}
            >
              <img src={industry.icon} alt={`${industry.name} icon`} className="application-icon" />
              <h4>{industry.name}</h4>
              <p>{industry.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationsSection;