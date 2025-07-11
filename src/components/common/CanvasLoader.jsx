// src/components/common/CanvasLoader.jsx
import React from 'react';
import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    // Html de 'drei' nos permite renderizar HTML normal dentro de un Canvas 3D
    <Html center>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid var(--color-primary-blue)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}></div>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-primary-dark)',
          fontWeight: 800,
          marginTop: '20px'
        }}>
          Cargando modelo...
        </p>
      </div>
      {/* Definimos la animación del spinner directamente aquí */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default CanvasLoader;