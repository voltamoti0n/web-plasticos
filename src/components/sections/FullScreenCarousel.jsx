// src/components/sections/FullScreenCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FullScreenCarousel.css';

const Arrow = ({ direction }) => (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={direction === 'left' ? "M8.5 15L1.5 8L8.5 1" : "M1.5 1L8.5 8L1.5 15"} stroke="white" strokeWidth="2" />
    </svg>
);
  
const FullScreenCarousel = ({ slides, onButtonClick }) => {
    const [index, setIndex] = useState(0);
  
    const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  
    const currentSlide = slides[index];
  
    return (
      <section id="inicio" className="carousel-container">
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
                <button onClick={() => onButtonClick(currentSlide.type, currentSlide.target)} className="slide-cta">
                  {currentSlide.buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navegación ahora está fuera de .carousel-content para un mejor posicionamiento */}
          <div className="carousel-navigation">
            <button onClick={handlePrev} className="nav-arrow" aria-label="Anterior"><Arrow direction="left" /></button>
            <button onClick={handleNext} className="nav-arrow" aria-label="Siguiente"><Arrow direction="right" /></button>
          </div>
        </div>
      </section>
    );
};
  
export default FullScreenCarousel;