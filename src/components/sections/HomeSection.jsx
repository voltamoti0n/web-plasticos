// src/components/sections/HomeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- IMPORTAR Link
import './SectionStyles.css';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const HomeSection = ({ id, title, subtitle, content, image, linkTo, reverse = false }) => {
  return (
    <div id={id} className="section-container">
      <div className={`section-content split-layout ${reverse ? 'reverse' : ''}`}>
        <motion.div className="text-content left-align" variants={textVariants}>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="section-body">{content}</div>
          {linkTo && (
            // Usamos el componente Link en lugar de <a>
            <Link to={linkTo} className="section-cta-link">
              Conocer Más →
            </Link>
          )}
        </motion.div>
        <motion.div className="image-content" variants={imageVariants}>
          <img src={image} alt={title} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;