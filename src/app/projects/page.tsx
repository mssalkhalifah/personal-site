import ProjectController from "@/lib/project/project.controller";
import ProjectList from "./projectList";

export default async function page() {
  const projects = await ProjectController.getAllProjects();

  return (
    <ProjectList
      projects={projects}
      baseImageURL={process.env.imageURL || ""}
    />
  );
}
