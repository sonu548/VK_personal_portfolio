import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight 
        position={[10, 10, 5]}
        intensity={0.8}
      />
      <pointLight
        position={[-10, -10, -5]} 
        intensity={1.5}
      />
      <primitive 
        object={earth.scene} 
        scale={1.8}
        position-y={0}
        position-z={3}
        rotation-y={0}
        position-x={0.5}
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <div className="relative w-[100vw] h-full right-[35vw] sm:right-[30vw] scroll-smooth overflow-hidden z-[-1]">
      <Canvas
        shadows
        frameloop='demand'
        dpr={[2, 1]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 55,
          near: 0.5,
          far: 100,
          position: [-3, 2, 12],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
