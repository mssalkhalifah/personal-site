"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Box from "./three";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import { Model } from "./three/macintosh";

export default function Scene() {
  const isDebug = false;

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={"Loading..."}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Model position={[0, -3, -3]} rotation={[0, 0, 0]} />
        {isDebug ? <CameraDebug /> : <Camera />}
      </Suspense>
    </Canvas>
    // <Camera />
    // <Model position={[4.5, -3, -3]} rotation={[0, -1, 0]} />
  );
}
