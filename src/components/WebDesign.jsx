import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";

const WebDesign = () => {
  return (
    <Canvas  camera={{ fov: 30, position: [5, 5,15] }}>
      <Stage environment="city" intensity={1}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default WebDesign;
