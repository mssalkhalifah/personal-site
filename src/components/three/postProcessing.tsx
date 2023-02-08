import { useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  PixelationEffect,
} from "postprocessing";

export default function PostProcess() {
  const { gl, scene, camera, size } = useThree();
  const composer = new EffectComposer(gl);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new EffectPass(camera, new PixelationEffect(5)));

  return useFrame(() => {
    gl.render(scene, camera);
    composer.render();
  }, 1);
}
