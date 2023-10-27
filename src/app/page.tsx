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
import SmallCard from "@/components/cards/small/SmallCard";
import HorizontalDiv from "./horizontal-scroll";

export default async function Page() {
  const projects: Project[] = await ProjectController.getLatestProjects(3);

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
      <section className="relative h-full container mx-auto">
        <div className="flex flex-col w-full h-full justify-center place-items-center">
          <h1 className="absolute top-28 text-2xl text-center sm:text-4xl font-black">
            <span className="bg-zinc-950 dark:bg-zinc-800 shadow-md shadow-zinc-800 text-zinc-50 rounded-xl px-6 py-1">
              WHAT I DO
            </span>
          </h1>
          <HorizontalDiv>
            <WhatIDoFrontEnd />
            <WhatIDoBackend />
            <WhatIDoDatabase />
          </HorizontalDiv>
        </div>
      </section>
      <section className="relative h-full container mx-auto">
        <div className="flex flex-col w-full h-full justify-center place-items-center">
          <h1 className="absolute top-28 text-2xl text-center sm:text-4xl font-black">
            <span className="bg-zinc-950 dark:bg-zinc-800 shadow-md shadow-zinc-800 text-zinc-50 rounded-xl px-6 py-1">
              LATEST PROJECTS
            </span>
          </h1>
          <HorizontalDiv>
            {projects.map((project) => {
              return (
                <SmallCard
                  key={project.id}
                  postImage={project.attributes.postImage}
                  stacks={project.attributes.stacks}
                  url={"projects/" + project.attributes.slug}
                />
              );
            })}
          </HorizontalDiv>
        </div>
      </section>
    </div>
  );
}
