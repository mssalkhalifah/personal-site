import { useThree } from "@react-three/fiber";

export default function Camera() {
  useThree(({ camera }) => {
    camera.position.set(2.83, 0, 5.66);
    camera.rotation.set(0, 0.79, 0);
  });

  return <></>;
}
