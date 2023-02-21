import { useThree } from "@react-three/fiber";

export default function Camera() {
  const position = {
    x: -3,
    y: 5.000000000000001,
    z: 10.586740722153886,
  };
  const rotation = {
    x: -0.13784800693667534,
    y: 0,
    z: 0,
  };

  useThree(({ camera }) => {
    //camera.position.set(position.x, position.y, position.z);
    //camera.rotation.set(rotation.x, rotation.y, rotation.z);
  });

  return <></>;
}
