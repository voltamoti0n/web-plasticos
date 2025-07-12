// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
        { path: '/quienes-somos', name: 'Quiénes Somos' },
        { path: '/productos', name: 'Productos' },
        { path: '/procesos', name: 'Procesos' },
        { path: '/contacto', name: 'Contacto' },
    ];

    return (
        <footer id="footer" className="main-footer-container">
            <div className="footer-content">
                <div className="footer-logo-info">
                    <a href="/"><img src={logo} alt="Plásticos Anticorrosivos Logo" className="footer-logo" /></a>
                    <p>Ingeniería de materiales compuestos para la industria moderna.</p>
                </div>
                <div className="footer-links">
                    <h4>Navegación</h4>
                    <ul>
                        {footerLinks.map(link => (
                            <li key={link.path}>
                                <a href={link.path}>{link.name}</a>
                            </li>
                        ))}
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