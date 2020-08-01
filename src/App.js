import React, {useRef, Suspense} from 'react';
import './App.css';

import {Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls, softShadows} from 'drei';

softShadows();

const Material = () => {
  return(
    <meshStandardMaterial attach="material" color='hotpink' />
  )
}

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, './scene.gltf');

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh material={materials.Material} geometry={nodes.Cube.geometry} />
        <mesh material={materials['Material.001']} geometry={nodes.Cube.geometry} />
        <group position={[0.29, 5.09, -0.12]} rotation={[-Math.PI / 2, 1.29, Math.PI / 2]}>
          <mesh material={materials['Material.002']} geometry={nodes.Cylinder003.geometry} />
          <mesh material={materials['Material.003']} geometry={nodes.Cylinder003.geometry} />
        </group>
        <group position={[0.44, 5.45, -0.01]}>
          <mesh material={materials['Material.004']} geometry={nodes.Cylinder004.geometry} />
          <mesh material={Material} geometry={nodes.Cylinder004.geometry} />
        </group>
      </group>
    </group>
  )
}

function App() {
  return (
    <div className="App">
      <h1>🦂</h1>
    </div>
  );
}

export default App;
