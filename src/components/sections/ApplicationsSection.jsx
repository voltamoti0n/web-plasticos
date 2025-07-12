// src/components/sections/ApplicationsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SectionStyles.css';
import iconQuimica from '/src/assets/icons/quimica_icono.png';
import iconAgua from '/src/assets/icons/agua_icono.png';
import iconAlimentos from '/src/assets/icons/comida_icono.png';
import iconMineria from '/src/assets/icons/mineria_icono.png';

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const industries = [
    { name: 'Industria Química', desc: 'Tanques para ácidos, bases y solventes con máxima seguridad.', icon: iconQuimica },
    { name: 'Tratamiento de Agua', desc: 'Soluciones duraderas para plantas potabilizadoras y de tratamiento.', icon: iconAgua },
    { name: 'Alimentos y Bebidas', desc: 'Almacenamiento higiénico que cumple con los más altos estándares.', icon: iconAlimentos },
    { name: 'Minería', desc: 'Resistencia extrema a la abrasión y a los químicos agresivos del sector.', icon: iconMineria },
];

const ApplicationsSection = ({ id }) => {
  return (
    <motion.div
      id={id}
      className="section-container dark-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-content">
        <motion.div className="text-content left-align" variants={titleVariants}>
          <h2 className="section-title accent-blue">Una Solución, Múltiples Industrias</h2>
          <p className="section-subtitle">Nuestra tecnología de PRFV es la elección confiable para los sectores más exigentes.</p>
        </motion.div>
        
        <motion.div className="applications-grid" variants={gridVariants}>
          {industries.map((industry) => (
            <motion.div
              className="application-card"
              key={industry.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={industry.icon} alt={`${industry.name} icon`} className="application-icon" />
              <h4>{industry.name}</h4>
              <p>{industry.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ApplicationsSection;