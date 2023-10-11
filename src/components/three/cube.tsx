import useMousePositionNormalized from "@/hooks/useMousePositionNormalized";
import { lerp } from "@/utils/math";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BoxGeometry, Mesh, Raycaster, Vector2, Vector3 } from "three";

interface Cube {
  position: Vector3;
  timer: number;
}

const Cube = (props: Cube) => {
  const mousePos = useMousePositionNormalized("myCanvas");
  const pointer = new Vector2();
  const raycaster = new Raycaster();
  const ref = useRef<Mesh>(null);
  const { camera } = useThree();
  const [start, setStart] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cubeName = `${props.position.x} ${props.position.z}`;
  const geometry = new BoxGeometry(1, 1, 1, 1, 1, 1);

  setTimeout(() => setStart(true), props.timer);
  useFrame(() => {
    if (ref.current) {
      const cube = ref.current;
      if (start) {
        cube.position.y = lerp(cube.position.y, 0, 0.37);
      }
    }
  });

  return (
    <mesh
      ref={ref}
      name={cubeName}
      position={[props.position.x, 20, props.position.z]}
      geometry={geometry}
      onClick={() => {
        if (ref.current && ref.current.parent) {
          pointer.set(mousePos.x, mousePos.y);
          raycaster.setFromCamera(pointer, camera);

          const intersects = raycaster.intersectObjects(
            ref.current.parent.children
          );

          if (intersects[0] && intersects[0].object == ref.current) {
            setClicked(true);
          }
        }
      }}
    >
      <meshStandardMaterial attach="material" color={0xffffff} />
    </mesh>
  );
};

export default Cube;
