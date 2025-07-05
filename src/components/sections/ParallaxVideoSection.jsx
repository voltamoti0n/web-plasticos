// src/components/sections/ParallaxVideoSection.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxVideoSection.css';

const ParallaxVideoSection = ({ videoSrc }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={targetRef} id="parallax-video" className="parallax-section">
      <motion.div className="parallax-video-bg" style={{ y }}>
        <video src={videoSrc} autoPlay loop muted playsInline />
      </motion.div>
      <div className="parallax-content">
        <h2>Calidad que se ve. Resistencia que perdura.</h2>
        <p>Nuestro proceso de fabricación integra tecnología de punta y la supervisión de expertos para garantizar que cada pieza cumpla con las más altas expectativas de rendimiento y durabilidad.</p>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;