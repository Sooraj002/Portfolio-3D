import React from 'react'
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Phone from"./Phone"


const ProductDesign = () => {
  return (
    <Canvas  camera={{ fov: 30, position: [5, 5,15] }}>
      <Stage environment="city" intensity={1}>
        <Phone />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ProductDesign