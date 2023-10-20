"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Camera from "./three/camera";
import CameraDebug from "./three/cameraDebug";
import MyPointLightHelper from "./three/PointLightHelper";
import SmoothCube from "./three/SmoothCubes";
import Configuration from "./three/configuration";
import { useTheme } from "next-themes";

export default function Scene() {
  const isDebug = false;
  const { theme } = useTheme();

  return (
    <div className="relative h-full">
      <Suspense>
        <Canvas
          shadows="soft"
          resize={{ scroll: true }}
          performance={{ max: 60 }}
        >
          <Configuration />
          <ambientLight intensity={0.5} />
          <MyPointLightHelper />
          <SmoothCube />
          <Camera />
          <fog
            attach="fog"
            args={[theme === "dark" ? 0x00000 : 0xffffff, 1, 19]}
          />
        </Canvas>
        <div className="absolute z-10 bg-gradient-to-t from-white dark:from-black from-0% to-transparent w-full to-100% bottom-0 h-[15%]"></div>
      </Suspense>
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
