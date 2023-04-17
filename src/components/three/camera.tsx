import { OrthographicCamera } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";

export default function Camera() {
  const zoom = 143.2194277655406;
  const position: Vector3 = [
    7.067248505627446, 4.701914197368265, 7.067248505627447,
  ];
  const rotation: Euler = [
    -0.4753633462470281, 0.726775054319697, 0.32954820392304146,
  ];

  return (
    <OrthographicCamera
      makeDefault
      rotation={rotation}
      position={position}
      zoom={zoom}
    />
  );
}
