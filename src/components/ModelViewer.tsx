"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';

interface ModelViewerProps {
  modelPath: string;
  viewMode?: 'exterior' | 'interior';
}

export default function ModelViewer({ modelPath, viewMode = 'exterior' }: ModelViewerProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);

  // Smoothly transition camera position based on viewMode
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * (viewMode === 'exterior' ? 0.1 : 0);
    }

    const targetPos = viewMode === 'exterior' ? new THREE.Vector3(5, 2, 5) : new THREE.Vector3(0.5, 1.2, 0.5);
    const targetLookAt = viewMode === 'exterior' ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(0, 1.2, -2);
    
    state.camera.position.lerp(targetPos, 0.05);
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt, 0.05);
      controlsRef.current.update();
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow 
      />
      <pointLight position={[0, 2, 0]} intensity={1} color="#ffccaa" />

      <Stage environment="city" intensity={0.5} adjustCamera={false}>
        <primitive object={scene} ref={modelRef} castShadow receiveShadow />
      </Stage>

      <OrbitControls 
        ref={controlsRef}
        enablePan={viewMode === 'interior'}
        enableZoom={true}
        minDistance={viewMode === 'exterior' ? 2 : 0.1}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2 + 0.1}
      />
    </>
  );
}
