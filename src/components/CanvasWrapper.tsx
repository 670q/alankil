"use client";

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ModelViewer from './ModelViewer';

interface CanvasWrapperProps {
  viewMode: 'exterior' | 'interior';
}

export default function CanvasWrapper({ viewMode }: CanvasWrapperProps) {
  return (
    <Suspense fallback={<div className="text-center w-full h-full flex items-center justify-center text-amber-500 font-mono animate-pulse">جاري تحميل الأصول...</div>}>
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
        <ModelViewer modelPath="/3_12_2026-draco-optimized.glb" viewMode={viewMode} />
      </Canvas>
    </Suspense>
  );
}
