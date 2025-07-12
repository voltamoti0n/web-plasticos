// src/pages/ContactPage.jsx
import React from 'react';
import Header from '../components/common/Header'; // Importamos Header aquí
import AnimatedSection from '../components/common/AnimatedSection';
import './ContactPage.css';
import headerBg from/src/assets/images/contenedor_5.jpeg';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado. Gracias por contactarnos, nos pondremos en contacto a la brevedad.');
    e.target.reset();
  };

  return (
    <AnimatedSection>
      <Header />
      <div className="page-header-container" style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Contacto y Cotizaciones</h1>
          <p>Estamos listos para diseñar la solución perfecta para sus necesidades. Complete el formulario o utilice nuestros datos de contacto directo.</p>
        </div>
      </div>

      <div className="page-content-body">
        <div className="contact-content-wrapper">
          <div className="contact-details">
              <h3>Información de Contacto</h3>
              <p>Nuestro equipo de expertos está a su disposición para cualquier consulta técnica o comercial.</p>
              <p><strong>Dirección:</strong><br/>Calle Ficticia 123, Parque Industrial, Querétaro, Qro. México</p>
              <p><strong>Email:</strong><br/><a href="mailto:ventas@plasticosanticorrosivos.com">ventas@plasticosanticorrosivos.com</a></p>
              <p><strong>Teléfono:</strong><br/><a href="tel:+524421234567">+52 (442) 123 4567</a></p>
          </div>
          <div className="contact-form-container">
              <h3>Solicitar Información o Cotización</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Empresa (Opcional)</label>
                    <input type="text" id="company" name="company" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje / Requerimientos</label>
                    <textarea id="message" name="message" rows="6" placeholder="Ej: Necesito un tanque para almacenar ácido sulfúrico al 98% con capacidad de 20,000 litros..." required></textarea>
                  </div>
                  <button type="submit" className="form-submit-button">Enviar Mensaje</button>
              </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ContactPage;