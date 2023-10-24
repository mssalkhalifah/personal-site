import Scene from "@/components/scene";
import ProjectController from "@/lib/project/project.controller";
import { Project } from "@/lib/project/project.interfaces";
import StackController from "@/lib/stack/stack.controller";
import HandleScroll from "./handle-scroll";
import MyProfile from "./my-profile";
import {
  WhatIDoBackend,
  WhatIDoDatabase,
  WhatIDoFrontEnd,
} from "@/components/cards/whatIdo/WhatIDo";

export default async function Page() {
  const projects: Project[] = await ProjectController.getLatestProjects(6);

  const react = await StackController.getStackByName("react");
  const nextJs = await StackController.getStackByName("nextJs");
  const nodejs = await StackController.getStackByName("nodejs");
  const postgresql = await StackController.getStackByName("postgresql");

  return (
    <div className="overflow-hidden h-full overscroll-none">
      <HandleScroll />
      <section className="relative h-full overflow-hidden">
        <Scene />
        <MyProfile stacks={[react, nextJs, nodejs, postgresql]} />
      </section>
      <section className="relative h-full container mx-auto ">
        <div className="flex flex-col w-full h-full justify-center place-items-center">
          <h1 className="absolute top-28 text-2xl text-center sm:text-4xl font-black">
            <span className="bg-zinc-950 text-zinc-50 rounded-xl px-6 py-1">
              WHAT I DO
            </span>
          </h1>
          <div className="ignore flex space-x-5 font-black overflow-x-auto touch-auto overscroll-auto py-8 w-full px-4 md:justify-center">
            <WhatIDoFrontEnd />
            <WhatIDoBackend />
            <WhatIDoDatabase />
          </div>
        </div>
      </section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
    </div>
  );
}
