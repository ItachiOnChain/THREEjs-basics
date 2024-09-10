import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2, 8]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
}

const App = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center"}}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight color={0x9CDBA6} intensity={10} position={[1, 1, 1]} />
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />
    </Canvas>
  );
}

export default App;
