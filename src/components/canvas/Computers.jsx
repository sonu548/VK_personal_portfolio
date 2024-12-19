import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Leva, useControls, button } from "leva";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const controlsRef = useRef();

  const defaultValues = {
    // Optimized values for both mobile and PC
    ambientIntensity: isMobile ? 1.5 : 2.5,
    pointLightIntensity: isMobile ? 0.8 : 1.2,
    positionX: isMobile ? -20 : -150,
    positionY: isMobile ? -1.2 : -3,
    positionZ: isMobile ? 0 : -1.5
  };

  const [values, setValues] = useControls(() => ({
    ambientIntensity: {
      value: defaultValues.ambientIntensity,
      min: 0,
      max: 5,
      step: 0.1,
      label: "Ambient Light",
    },
    pointLightIntensity: {
      value: defaultValues.pointLightIntensity,
      min: 0,
      max: 3,
      step: 0.1,
      label: "Point Light",
    },
    positionX: {
      value: defaultValues.positionX,
      min: -200,
      max: 200,
      step: 5,
      label: "Position Z",
    },
    positionY: {
      value: defaultValues.positionY,
      min: -5,
      max: 5,
      step: 0.1,
      label: "Position Y",
    },
    positionZ: {
      value: defaultValues.positionZ,
      min: -5,
      max: 5,
      step: 0.1,
      label: "Position X",
    },
    Reset: button(() => {
      setValues({
        ambientIntensity: defaultValues.ambientIntensity,
        pointLightIntensity: defaultValues.pointLightIntensity,
        positionX: defaultValues.positionX,
        positionY: defaultValues.positionY,
        positionZ: defaultValues.positionZ
      });
    })
  }));

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={values.ambientIntensity} />
      <pointLight intensity={values.pointLightIntensity} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.9} // Adjusted scale for S8+
        position={[values.positionX / 100, values.positionY, values.positionZ]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      return window.innerWidth <= 500; // Increased breakpoint for S8+
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <div className="absolute bottom-0 w-full h-[65vh] sm:h-[80vh]"> {/* Adjusted mobile height */}
      {!isMobile && (
        <button
          onClick={toggleControls}
          className="fixed top-[15px] right-[8px] z-[1000] w-[25px] h-[25px] 
                   rounded-full cursor-pointer text-[6px] font-semibold text-white
                   bg-gradient-to-br from-[#a659da] to-[#3d3d3d]
                   shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_4px_rgba(255,255,255,0.1)]
                   hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-1px_-1px_4px_rgba(255,255,255,0.1)]
                   active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]
                   transition-all duration-200 ease-out
                   border border-[#404040]
                   flex items-center justify-center
                   sm:top-[25px] sm:right-[15px] sm:w-[50px] sm:h-[50px] sm:text-[12px] sm:border-2"
        >
          <span className="transform transition-transform duration-200 hover:scale-110">
            {showControls ? '✕' : '⚙️'}
          </span>
        </button>
      )}

      <Leva 
        oneLineLabels 
        collapsed={false} 
        hidden={!showControls || isMobile}
        titleBar={true}
        theme={{
          sizes: {
            rootWidth: "280px",
            controlWidth: "120px",
            scrubberWidth: "5px",
          },
          radii: {
            xs: '2px',
            sm: '3px',
            lg: '6px'
          },
          space: {
            sm: '3px',
            md: '6px',
          },
          fonts: {
            mono: 'ui-monospace, monospace',
            sans: 'Inter, sans-serif'
          },
          shadows: {
            level1: '0 0 12px rgba(0,0,0,0.4)',
            level2: '0 0 16px rgba(0,0,0,0.5)'
          },
          colors: {
            elevation1: '#1a1a1a',
            elevation2: '#232323',
            elevation3: '#2c2c2c',
            accent1: '#0099ff',
            accent2: '#007acc',
            accent3: '#005c99',
            highlight1: '#3a3a3a',
            highlight2: '#4a4a4a',
            highlight3: '#5a5a5a'
          },
          borderWidths: {
            root: '1px',
            input: '1px',
          },
          fontWeights: {
            label: 500,
            folder: 500,
            button: 500
          }
        }}
      />

      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ 
          position: isMobile ? [4, 0.5, 1] : [25, 3, 5], // Adjusted mobile camera position
          fov: isMobile ? 25 : 30 // Adjusted mobile FOV
        }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
