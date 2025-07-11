// src/components/common/ModelViewer.jsx
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Center } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import './ModelViewer.css';

// --- Icono SVG para la pista de interacción ---
const DragIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '8px' }}
  >
    <path d="M5 11l7-7 7 7M5 19l7-7 7 7" />
  </svg>
);


function RotatingModel({ children }) {
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  return <group ref={modelRef}>{children}</group>;
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  // Al clonar la escena, nos aseguramos de que cada instancia es única
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={clonedScene} />;
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
    <div className="model-viewer-container">
      {/* CORRECCIÓN: El prompt ahora vive dentro del div principal del viewer */}
      <div className={`interaction-prompt ${!showPrompt ? 'hidden' : ''}`}>
        <DragIcon />
        ARRASTRA PARA ROTAR
      </div>

      <Canvas
        // AJUSTE: Cámara más cerca y con un campo de visión (FOV) más natural
        camera={{ position: [0, 2, 12], fov: 45 }}
        shadows
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          
          <RotatingModel>
            <Center>
              <Model url={modelUrl} />
            </Center>
          </RotatingModel>
          
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          // AJUSTE: Límites de zoom para mantener el modelo visible
          minDistance={4}
          maxDistance={20}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/models/contenedor.glb');

export default ModelViewer;