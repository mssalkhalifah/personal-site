"use client"

import { Canvas} from "@react-three/fiber";
import Box from "./three";

export default function Scene() {
  return <Canvas style={{width:"100%", height:"100%"}}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>;
}
