// src/components/sections/ModelSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ModelViewer from '../common/ModelViewer';
import './SectionStyles.css';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// --- Variante para el texto en el lado opuesto ---
const textVariantsReverse = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const modelVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ModelSection = ({ id, title, subtitle, content, reverse = false }) => {
  return (
    <div id={id} className="section-container">
      <div className={`section-content split-layout ${reverse ? 'reverse' : ''}`}>
        <motion.div 
          className="text-content left-align" 
          variants={reverse ? textVariantsReverse : textVariants}
        >
          <h2 className="section-title accent-blue">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="section-body">{content}</div>
        </motion.div>
        
        {/* CORRECCIÓN: Añadimos position: relative al contenedor del modelo */}
        <motion.div 
          className="model-content" 
          variants={modelVariants} 
          style={{ position: 'relative' }}
        >
          <ModelViewer />
        </motion.div>
      </div>
    </div>
  );
};

export default ModelSection;