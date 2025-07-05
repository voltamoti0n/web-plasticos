// src/components/sections/FullScreenCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FullScreenCarousel.css';

// ... (componente Arrow sin cambios)

const FullScreenCarousel = ({ slides, onButtonClick }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[index];

  return (
    <section id="inicio" className="carousel-container">
      {/* ... (código de AnimatePresence y motion.div para el fondo sin cambios) ... */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="slide-background"
          style={{ backgroundImage: `url(${currentSlide.background})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="carousel-overlay"></div>
      <div className="carousel-ui-layer">
        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <h1>{currentSlide.title}</h1>
              <p>{currentSlide.description}</p>
              {/* El botón ahora siempre llama a onButtonClick, que es la función de scroll */}
              <button onClick={() => onButtonClick(currentSlide.target)} className="slide-cta">
                {currentSlide.buttonText}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="carousel-navigation">
          <button onClick={handlePrev} className="nav-arrow" aria-label="Anterior"><Arrow/></button>
          <button onClick={handleNext} className="nav-arrow" aria-label="Siguiente"><Arrow/></button>
        </div>
      </div>
    </section>
  );
};

export default FullScreenCarousel;