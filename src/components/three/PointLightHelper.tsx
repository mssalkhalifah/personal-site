import { useRef } from "react";
import { PointLight } from "three";

const MyPointLightHelper = () => {
  const lightRef = useRef<PointLight>(null);

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[-6, 9, 4]}
        intensity={1}
        castShadow
      />
    </>
  );
};

export default MyPointLightHelper;
