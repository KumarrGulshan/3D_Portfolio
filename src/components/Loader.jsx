import React,{useState, useEffect, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF,Sky } from "@react-three/drei";
// import * as THREE from 'three';

const Model1 = ({initialModel1Rotation = { x: 0.1, y: 0.2 }}) => {
  const { scene: mushrooms } = useGLTF("/3D_Portfolio/mushroom.glb");
  const Model1Ref = useRef();
  const mousePosition = useRef({x:0, y:0});

  useEffect(()=>{
    const handleMouseMove =(event) =>{
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  },[]);
  
  useEffect(() => {
    if (Model1Ref.current) {
        // Setting the initial rotation of the head using the passed prop
        Model1Ref.current.rotation.set(initialModel1Rotation.x, initialModel1Rotation.y, 0);
    }
}, [initialModel1Rotation]);

useFrame(() => {
  if (Model1Ref.current) {
      const sensitivity = 0.3; // sensitivity for more rotation
      const smoothing = 0.3;  // Smoothing factor for interpolation

      const targetRotationX = mousePosition.current.y * sensitivity + initialModel1Rotation.x;
      const targetRotationY = mousePosition.current.x * sensitivity + initialModel1Rotation.y;

      // smooth interpolation for natural motion
      Model1Ref.current.rotation.x += (targetRotationX - Model1Ref.current.rotation.x) * smoothing;
      Model1Ref.current.rotation.y += (targetRotationY - Model1Ref.current.rotation.y) * smoothing;
  }
});

  return(
  <group ref = {Model1Ref}>
    <primitive
    object={mushrooms}
    position={[0, -1.0, 0]} 
    scale={[0.9, 0.9, 0.9]} 
    />
  </group>
  );
};
const Loader = () => {
  return (
  
     <div style={{ width: "100vw", height: "100vh", background: "#1a1a1a" }}>
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        
        <OrbitControls
          enableZoom={true}
          zoomSpeed={1.2}
          enableDamping={true}
          dampingFactor={0.1}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={0.5}
          maxPolarAngle={Math.PI / 2}
        />

        
        <Model1 />
      </Canvas>
    </div>
  );
};

export default Loader;
