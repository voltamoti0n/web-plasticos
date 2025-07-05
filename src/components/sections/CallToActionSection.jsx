// src/components/sections/CallToActionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SectionStyles.css';

const ctaVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const CallToActionSection = () => {
  return (
    <motion.div 
      className="section-container cta-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={ctaVariants}
    >
      <div className="section-content">
        <h2 className="section-title">¿Listo para transformar su almacenamiento?</h2>
        <p className="section-subtitle cta-subtitle">
          Contáctenos para un análisis detallado y una cotización personalizada. Nuestro equipo de ingenieros está listo para diseñar la solución perfecta para sus necesidades.
        </p>
        <button className="cta-button" onClick={() => window.location.href = 'mailto:ventas@plasticosanticorrosivos.com'}>
          Solicitar Cotización
        </button>
      </div>
    </motion.div>
  );
};

export default CallToActionSection;