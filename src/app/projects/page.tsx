import ProjectController from "@/lib/project/project.controller";
import StackController from "@/lib/stack/stack.controller";
import ProjectList from "./projectList";

export default async function page() {
  const projects = await ProjectController.getAllProjects();
  const stacks = await StackController.getAllStacks();

  return (
    <ProjectList
      projects={projects}
      baseImageURL={process.env.imageURL || ""}
      stacks={stacks}
    />
  );
}
