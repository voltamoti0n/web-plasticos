// src/components/common/Loader.jsx (Ejemplo, adapta a tu código)
import React, { useEffect } from 'react';
// import './Loader.css'; // Asegúrate de tener tu CSS

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    // Añadir clase al body cuando el loader se monta
    document.body.classList.add('loading');
    
    // Simula un tiempo de carga y luego llama a onLoaded
    const timer = setTimeout(() => {
      onLoaded();
      // Quita la clase del body cuando la carga termina
      document.body.classList.remove('loading');
    }, 1500); // Ajusta el tiempo si es necesario

    // Limpieza
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loader-container">
      {/* Tu animación de loader aquí */}
      <img src="/path/to/your/logo.png" alt="Cargando..." />
    </div>
  );
};

export default Loader;