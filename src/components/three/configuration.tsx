import { useThree } from "@react-three/fiber";

export default function Configuration() {
  const { gl } = useThree();
  gl.domElement.id = "myCanvas";

  return <></>;
}
