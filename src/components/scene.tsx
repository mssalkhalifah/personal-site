"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import MyPointLightHelper from "./three/PointLightHelper";
import SmoothCube from "./three/SmoothCubes";
import Configuration from "./three/configuration";

export default function Scene() {
  const isDebug = false;

  return (
    <div className="relative h-full">
      <Canvas
        className=""
        shadows="soft"
        resize={{ scroll: true }}
        performance={{ max: 60 }}
      >
        <Suspense fallback={"Loading..."}>
          <Configuration />
          <ambientLight intensity={0.5} />
          <MyPointLightHelper />
          <SmoothCube />
          <Camera />
          <fog attach="fog" args={[0xffffff, 1, 19]} />
        </Suspense>
      </Canvas>
      <div className="absolute z-10 bg-gradient-to-t from-white from-0% to-transparent w-full to-100% bottom-0 h-[15%]"></div>
    </div>
  );
}
//<PostProcess />
// <CameraDebug />
// <CameraDebug />
// {isDebug ?? (
//   <>
//     <gridHelper />

//   </>
// )}
