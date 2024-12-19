import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-[100vw] h-100% absolute inset-0 z-[-2]'>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => {
//     const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
//     // Filter out any NaN values
//     for (let i = 0; i < positions.length; i++) {
//       if (isNaN(positions[i])) {
//         positions[i] = 0;
//       }
//     }
//     return positions;
//   });

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.003}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={0.5}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto min-h-screen fixed inset-0 z-[-2] pointer-events-none'>
//       <Canvas 
//         camera={{ position: [0, 0, 1] }}
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;