import useMousePositionNormalized from "@/hooks/useMousePositionNormalized";
import { useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { BoxGeometry, Group, Object3D, Raycaster, Vector2 } from "three";

const getNeighbors = (
  cube: Object3D<THREE.Event>,
  grid: Group
): Object3D<THREE.Event>[] => {
  const neighbors: Object3D<THREE.Event>[] = [];
  const position = cube.position;
  const distance = 1.5;

  grid.children.forEach((neighbor) => {
    if (neighbor.id !== cube.id) {
      const neighborPosition = neighbor.position;
      const dx = position.x - neighborPosition.x;
      const dy = position.y - neighborPosition.y;
      const dz = position.z - neighborPosition.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist <= distance) {
        neighbors.push(neighbor);
      }
    }
  });

  return neighbors;
};

function lerp(
  startValue: number,
  endValue: number,
  lerpAmount: number
): number {
  const smoothedLerpAmount = (1 - Math.cos(lerpAmount * Math.PI)) / 2;
  const easedLerpAmount =
    smoothedLerpAmount * smoothedLerpAmount * (3 - 2 * smoothedLerpAmount);
  const interpolatedValue =
    startValue * (1 - easedLerpAmount) + endValue * easedLerpAmount;
  return interpolatedValue;
}

const SmoothCube = () => {
  const mousePos = useMousePositionNormalized();
  const pointer = new Vector2();
  const raycaster = new Raycaster();
  const { camera } = useThree();
  const geometry = new BoxGeometry(1, 1, 1, 1, 1, 1);
  const groupRef = useRef<Group>(null);
  const board = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  const offset = board.length / 2 / (board.length * 2);
  const centerHeight = 0.3;
  const neighborHeight = 0.2;
  const lerpAmount = 0.5;

  useFrame(() => {
    pointer.set(mousePos.x, mousePos.y);
    raycaster.setFromCamera(pointer, camera);

    if (groupRef.current) {
      const intersects = raycaster.intersectObjects(groupRef.current.children);

      if (intersects[0]) {
        const cube = intersects[0].object;

        cube.position.y = lerp(cube.position.y, centerHeight, lerpAmount);

        const neighbors = getNeighbors(cube, groupRef.current);
        neighbors.forEach(
          (neighbor) =>
            (neighbor.position.y = lerp(
              neighbor.position.y,
              neighborHeight,
              lerpAmount
            ))
        );
        groupRef.current.children.forEach((child) => {
          if (child.id !== cube.id && neighbors.indexOf(child) < 0) {
            child.position.y = lerp(child.position.y, 0, lerpAmount);
          }
        });
      } else {
        groupRef.current.children.forEach(
          (child) => (child.position.y = lerp(child.position.y, 0, lerpAmount))
        );
      }
    }
  });

  return (
    <group
      ref={groupRef}
      castShadow
      receiveShadow
      scale={1}
      position={[-(board.length / 2) + offset, 0, board.length / 2 - offset]}
    >
      {board.map((list, x) => {
        return (
          <>
            {list.map((item, z) => {
              const currentName = `${x} ${z}`;
              return (
                item === 1 && (
                  <mesh
                    key={currentName}
                    name={currentName}
                    position={[1.1 * x, 0, -1.1 * z]}
                    geometry={geometry}
                  >
                    <meshStandardMaterial attach="material" color={0xffffff} />{" "}
                    )
                  </mesh>
                )
              );
            })}
          </>
        );
      })}
    </group>
  );
};

export default SmoothCube;
