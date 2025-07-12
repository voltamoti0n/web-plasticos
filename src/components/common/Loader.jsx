// src/components/common/Loader.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Ya no se necesita AnimatePresence aquí
import './Loader.css';
import logo from '/src/assets/images/logo.PNG';

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      onLoaded();
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onLoaded]);

  return (
    // Ya no se necesita AnimatePresence aquí, solo el motion.div
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Esta animación de salida ahora será gestionada por App.jsx
      transition={{ duration: 0.5 }}
    >
      <div className="loader-curtain"></div>
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img src={logo} alt="Cargando..." className="loader-logo" />
        <p className="loader-tagline">Ingeniería en Plásticos Reforzados</p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;