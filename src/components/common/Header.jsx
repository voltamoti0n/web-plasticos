// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

// Volvemos a pasar la función de scroll como prop
const Header = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setIsScrolled(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* El logo también hace scroll */}
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Plásticos Anticorrosivos Logo" className="logo" />
        </div>
        <nav className="main-nav">
          <ul>
            {/* Los links ahora usan la función de scroll */}
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