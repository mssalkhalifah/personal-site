"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Box from "./three";
import { Balls } from "./three/balls";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import { Model } from "./three/macintosh";
import { Computer } from "./three/notMacintosh";
import PostProcess from "./three/postProcessing";

export default function Scene() {
  const isDebug = true;

  return (
    <Canvas style={{ width: "50%", height: "100%" }}>
      <PostProcess />
      <Suspense fallback={"Loading..."}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Balls scale={0.2} />
        {isDebug ? <CameraDebug /> : <Camera />}
      </Suspense>
    </Canvas>
    // <Computer position={[0, 0, 0]} />
    // <Box position={[-1.2, 0, 0]} />
    // <Box position={[1.2, 0, 0]} />
    // <Model position={[0, -3, -3]} rotation={[0, 0, 0]} />
    // <Camera />
    // <Model position={[4.5, -3, -3]} rotation={[0, -1, 0]} />
  );
}
