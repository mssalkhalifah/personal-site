import { OrthographicCamera } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";

export default function Camera() {
  const zoom = 170;
  // const position: Vector3 = [
  //   7.067248505627446, 4.701914197368265, 7.067248505627447,
  // ];
  // const rotation: Euler = [
  //   -0.4753633462470281, 0.726775054319697, 0.32954820392304146,
  // ];
  //
  const position: Vector3 = [7, 3, 7];
  const rotation: Euler = [
    -0.27829965900511133, 0.7657852910598825, 0.1955001405937302,
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
