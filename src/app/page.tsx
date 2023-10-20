import Scene from "@/components/scene";
import ProjectController from "@/lib/project/project.controller";
import { Project } from "@/lib/project/project.interfaces";
import HandleScroll from "./handle-scroll";
import MyProfile from "./my-profile";

export default async function Page() {
  const projects: Project[] = await ProjectController.getLatestProjects(6);

  return (
    <div className="overflow-hidden h-full overscroll-none">
      <HandleScroll />
      <section className="relative h-full overflow-hidden">
        <Scene />
        <MyProfile />
      </section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
      <section className="h-full overflow-hidden"></section>
    </div>
  );
}
