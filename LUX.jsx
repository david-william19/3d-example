/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 src/assets/ANDRIS 2 LUX.gltf --transform
*/
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ANDRIS 2 LUX-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.PaletteMaterial001} position={[0, 0.003, 0.028]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.PaletteMaterial001} position={[0, 0.003, 0.028]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[0, 0.003, 0.028]} />
    </group>
  )
}

useGLTF.preload('/ANDRIS 2 LUX-transformed.glb')