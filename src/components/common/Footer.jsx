// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = ({ onNavClick }) => {
    const currentYear = new Date().getFullYear();
    return (
        // --- CORRECCIÓN: El ID se aplica directamente al footer ---
        <footer id="contacto" className="main-footer-container">
            <div className="footer-content">
                <div className="footer-logo-info">
                    <img src={logo} alt="Plásticos Anticorrosivos Logo" className="footer-logo" />
                    <p>Todo en fibra de vidrio.</p>
                </div>
                <div className="footer-links">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a onClick={() => onNavClick('sectores')}>Sectores</a></li>
                        <li><a onClick={() => onNavClick('productos')}>Productos</a></li>
                        <li><a onClick={() => onNavClick('beneficios')}>Beneficios</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contacto</h4>
                    <p>Calle Ficticia 123, Parque Industrial, Querétaro, Qro. México</p>
                    <p>ventas@plasticosanticorrosivos.com</p>
                    <p>+52 (442) 123 4567</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {currentYear} Plásticos Anticorrosivos S.A. de C.V. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;