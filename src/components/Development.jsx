import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyber_car from "./Cyber_car";

const Development = () => {
  return (
    <Canvas camera={{ fov: 30, position: [-0.5, 0.3, -1] }}>
      <Stage environment="city" intensity={1}>
        <Cyber_car />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
