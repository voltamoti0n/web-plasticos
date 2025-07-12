// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // <-- IMPORTAR Link
import './Header.css';
import logo from '/src/assets/images/logo.PNG';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/quienes-somos', name: 'Quiénes Somos' },
    { path: '/productos', name: 'Productos' },
    { path: '/procesos', name: 'Procesos' },
    { path: '/contacto', name: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    if (location.pathname !== '/') {
        setIsScrolled(true);
    } else {
        setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Usamos Link para el logo también, para una navegación SPA */}
        <Link to="/" className="logo-container" aria-label="Volver a la página de inicio">
          <img src={logo} alt="Plásticos Anticorrosivos Logo" className="logo" />
        </Link>
        <nav className="main-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                {/* Reemplazamos <a> con <Link> de react-router-dom */}
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active-link' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;