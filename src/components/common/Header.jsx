// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo-container" aria-label="Volver a la página de inicio">
          <img src={logo} alt="Plásticos Anticorrosivos Logo" className="logo" />
        </a>
        <nav className="main-nav">
          <ul>
            {/* Usamos <a> con onClick para el scroll suave */}
            <li><a onClick={() => onNavClick('quienes-somos')}>Quiénes Somos</a></li>
            <li><a onClick={() => onNavClick('productos')}>Productos</a></li>
            <li><a onClick={() => onNavClick('procesos')}>Procesos</a></li>
            <li><a onClick={() => onNavClick('contacto')}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;