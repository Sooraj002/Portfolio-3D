/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 phone.gltf --transform 
Files: phone.gltf [640.51KB] > C:\Users\soora\Downloads\Assets\phone\phone-transformed.glb [350.65KB] (45%)
Author: User2005 (https://sketchfab.com/lorenzo.brewer)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phone-5c53e579e1ec49d0a68a380316c252dc
Title: Phone
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./phone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0.448, 0.014, 0]} scale={12.08} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.PaletteMaterial002} position={[0.714, 1.729, -0.06]} rotation={[Math.PI / 2, 0, 0]} scale={17.14} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.PaletteMaterial003} position={[0.553, 1.496, -0.061]} rotation={[Math.PI / 2, 0, 0]} scale={[32.573, 16.362, 32.573]} />
    </group>
  )
}

useGLTF.preload('/phone-transformed.glb')
