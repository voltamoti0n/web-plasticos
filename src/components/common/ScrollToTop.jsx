// src/components/common/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Lógica para mostrar/ocultar el botón basada en la posición del scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) { // Aparece después de scrollear 400px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Limpieza del evento al desmontar el componente
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función que se ejecuta al hacer clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // El navegador se encarga de la animación suave
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top-button"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    aria-label="Volver al inicio"
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;