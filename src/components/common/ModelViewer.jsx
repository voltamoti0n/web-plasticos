// src/components/common/ModelViewer.jsx
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import './ModelViewer.css';

const DragIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drag-icon">
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
    </svg>
);

function RotatingModel({ children }) {
  const modelRef = useRef();
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.15;
    }
  });
  return <group ref={modelRef}>{children}</group>;
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  
  // ==================================================================
  // ===> ¡VALOR CLAVE #1: LA ESCALA! <===
  // 'scale={3.5}' hará el modelo muy grande.
  // 'position={[0, -1.5, 0]}' lo baja para que no flote.
  // ==================================================================
  return <primitive object={clonedScene} scale={3.5} position={[0, -1.5, 0]} />; 
}

const ModelViewer = () => {
  const modelUrl = '/models/contenedor.glb';
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="model-viewer-container" style={{ position: 'relative' }}>
      <div className={`interaction-prompt ${!showPrompt ? 'hidden' : ''}`}>
        <DragIcon />
        <span>ARRASTRA PARA ROTAR</span>
      </div>

      <Canvas
        shadows
        // ==================================================================
        // ===> ¡VALOR CLAVE #2: LA CÁMARA! <===
        // 'camera.position' define la distancia. [..., ..., 14] es una buena
        // distancia para un objeto grande.
        // 'fov: 40' es un campo de visión natural que no distorsiona.
        // ==================================================================
        camera={{ position: [0, 1, 14], fov: 40 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.7} />
          <spotLight position={[15, 20, 15]} angle={0.25} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-15, -10, -15]} intensity={0.5} />

          <RotatingModel>
            <Model url={modelUrl} />
          </RotatingModel>
          
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          // ===============================================================
          // ===> ¡VALOR CLAVE #3: LÍMITES DE ZOOM! <===
          // 'minDistance' es lo más cerca que puedes llegar.
          // 'maxDistance' es lo más lejos que puedes ir.
          // ===============================================================
          minDistance={9}
          maxDistance={22}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/models/contenedor.glb');

export default ModelViewer;