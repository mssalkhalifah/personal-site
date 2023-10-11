import { OrthographicCamera } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";

export default function Camera() {
  const zoom = 165.75421769730764;
  // const position: Vector3 = [
  //   7.067248505627446, 4.701914197368265, 7.067248505627447,
  // ];
  // const rotation: Euler = [
  //   -0.4753633462470281, 0.726775054319697, 0.32954820392304146,
  // ];
  //
  const position: Vector3 = [
    8.0962282650676, 3.776165854081917, 6.607378367303034,
  ];
  const rotation: Euler = [
    -0.41781176932765784, 0.8129701986796164, 0.3119286832269578,
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
