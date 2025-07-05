// src/pages/ContactPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import './ContactPage.css';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado. Gracias por contactarnos.');
  };

  return (
    <>
      <PageHeader
        title="Contacto y Cotizaciones"
        subtitle="Estamos listos para ayudarle. Complete el formulario o utilice nuestros datos de contacto."
      />
      <div className="contact-content-wrapper">
        <div className="contact-details">
          <h3>Información de Contacto</h3>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Parque Industrial, Querétaro, Qro. México</p>
          <p><strong>Email:</strong> ventas@plasticosanticorrosivos.com</p>
          <p><strong>Teléfono:</strong> +52 (442) 123 4567</p>
          <p>Nuestro equipo de ingeniería y ventas está a su disposición para cualquier consulta técnica o comercial.</p>
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
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje / Requerimientos</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="form-submit-button">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;