"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import MyPointLightHelper from "./three/PointLightHelper";
import PostProcess from "./three/postProcessing";
import SmoothCube from "./three/SmoothCube";

export default function Scene() {
  const isDebug = true;

  return (
    <Canvas shadows="soft" resize={{ scroll: true }} performance={{ max: 30 }}>
      <Suspense fallback={"Loading..."}>
        <ambientLight intensity={0.5} />
        <MyPointLightHelper />
        <gridHelper />
        <SmoothCube />
        <Camera />
        {isDebug ? <CameraDebug /> : <OrbitControls />}
      </Suspense>
    </Canvas>
    //<PostProcess />
  );
}
