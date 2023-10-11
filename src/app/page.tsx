import HorizontalCard from "@/components/cards/horizontal2/HorizontalCard";
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

      <div className="relative flex h-full w-full flex-col place-items-center justify-center bg-secondary">
        <div className="mx-2 flex max-w-5xl flex-col justify-center space-y-4">
          <MyExperiences />
        </div>
      </div>

      <div className="relative flex h-full w-full place-items-center justify-center bg-third">
        <div className="mx-2 flex max-w-5xl flex-col justify-center space-y-4">
          <h1 className="text-6xl font-extrabold underline">
            My Latest Projects
          </h1>
          <div className="space-y-2">
            {projects.map((project) => (
              <HorizontalCard
                key={project.id}
                image={`${process.env.imageURL}${project.attributes.postImage.data?.attributes.url}`}
                imageAlt={
                  project.attributes.postImage.data?.attributes.name || ""
                }
                title={project.attributes.title}
                stacks={project.attributes.stacks}
                description={project.attributes.description}
                startDate={project.attributes.startdate}
                endDate={project.attributes.enddate}
                projectUrl={`projects/${project.attributes.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
