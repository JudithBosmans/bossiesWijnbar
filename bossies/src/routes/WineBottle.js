import React, { useRef, useState } from "react";
import styles from "../App.css";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AmbientLight, DirectionalLight, PointLight } from "three";

const WineModel = () => {
  const { scene } = useGLTF("./models/modern_wine_bottle.glb");

  return <primitive object={scene} />;
};

const DynamicModel = ({ url }) => {
  const { scene } = useGLTF(url, () => setLoading(false));
  const [isLoading, setLoading] = useState(true);
  return <primitive object={scene} />;
};

const WineBottle = () => {
  return (
    <Canvas
      camera={{ position: [10, -5, -10], fov: 3 }}
      gl={{ alpha: true }}
      id="origamiModel"
    >
      <ambientLight intensity={20} />
      <directionalLight intensity={6} position={[0, 2, 0]} />
      <pointLight intensity={6} position={[0, 2, 0]} />

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <WineModel />
    </Canvas>
  );
};

export default WineBottle;
