"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingBox } from './FloatingBox';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <FloatingBox />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}