// src/components/sections/ApplicationsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SectionStyles.css';
import iconQuimica from '../../assets/icons/quimica_icono.png';
import iconAgua from '../../assets/icons/agua_icono.png';
import iconAlimentos from '../../assets/icons/comida_icono.png';
import iconMineria from '../../assets/icons/mineria_icono.png';

// ... (variantes de animación sin cambios) ...

const ApplicationsSection = ({ id }) => {
  // ... (array de industrias sin cambios) ...

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
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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