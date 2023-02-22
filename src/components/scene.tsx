"use client";

import { OrbitControls } from "@react-three/drei";
//import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Balls } from "./three/balls";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import PostProcess from "./three/postProcessing";

export default function Scene() {
  const isDebug = false;

  return (
    <Canvas>
      <PostProcess />
      <Suspense fallback={"Loading..."}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Balls scale={0.2} />
        {isDebug ? (
          <CameraDebug />
        ) : (
          <>
            <Camera />
            <OrbitControls />
          </>
        )}
      </Suspense>
    </Canvas>
  );
}
