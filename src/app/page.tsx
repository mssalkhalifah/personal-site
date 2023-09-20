import Scene from "@/components/scene";
import ProjectController from "@/lib/project/project.controller";
import { Project } from "@/lib/project/project.interfaces";
import MyExperiences from "./my-experiences";
import ProjectSection from "./project-section";

export default async function Page() {
  const projects: Project[] = await ProjectController.getLatestProjects(6);

  return (
    <div className="absolute left-0 top-0 h-full w-full font-primary">
      <Scene />

      <div className="relative flex h-full w-full flex-col place-items-center justify-center bg-third">
        <div className="mx-2 flex max-w-5xl flex-col justify-center space-y-4">
          <MyExperiences />
        </div>
      </div>

      <div className="relative flex h-full w-full place-items-center justify-center bg-secondary">
        <div className="mx-2 flex max-w-5xl flex-col justify-center space-y-4">
          <h1 className="text-6xl font-extrabold underline">
            My Latest Projects
          </h1>
          <ProjectSection projects={projects} />
        </div>
      </div>
    </div>
  );
}
