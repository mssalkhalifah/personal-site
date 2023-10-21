import Scene from "@/components/scene";
import ProjectController from "@/lib/project/project.controller";
import { Project } from "@/lib/project/project.interfaces";
import StackController from "@/lib/stack/stack.controller";
import HandleScroll from "./handle-scroll";
import MyProfile from "./my-profile";

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
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
    </div>
  );
}
