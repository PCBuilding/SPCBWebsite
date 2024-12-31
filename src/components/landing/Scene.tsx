import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 11.2], fov: 50 }}
      style={{ height: "240px" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Model position={[0, 0, 0]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="night" />
    </Canvas>
  );
}

export default Scene;

interface ModelProps {
  position: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/models/case.glb') as any; // Use "as any" to avoid issues with the GLTF loader
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 2;
    }
  });

  return (
    <group {...props} dispose={null} scale={0.8} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['0'].geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload('/models/case.glb');
