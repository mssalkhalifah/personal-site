/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Sphere001: THREE.Mesh;
    Sphere: THREE.Mesh;
  };
  materials: {};
};

type ActionName = "EmptyAction";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Balls(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials, animations } = useGLTF(
    "/balls.glb"
  ) as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null!);
  const mixer = new THREE.AnimationMixer(group.current);
  const clips = animations;
  const clip = THREE.AnimationClip.findByName(clips, "EmptyAction");

  useEffect(() => {
    console.log(animations);
    console.log(clip);

    clips.forEach((clip) => {
      //mixer.clipAction(clip).play();
    });
  });

  let speed = 0;
  useFrame((_, delta) => {
    mixer.update(delta);
    let yPos = 0.5 * Math.sin(0.1 * speed);
    group.current.position.y = yPos;
    speed += 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" rotation={[0, 0.87, 0]} scale={-11.23}>
          <mesh
            name="Sphere001"
            // ref={smallBall}
            geometry={nodes.Sphere001.geometry}
            material={nodes.Sphere001.material}
            position={[-0.9, 0, 0]}
            scale={-0.08}
          />
        </group>
        <mesh
          // ref={bigBall}
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          scale={4.55}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/balls.glb");
