import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectController from "@/lib/project/project.controller";
// import Scene from "@/components/scene";
// import { getProject, getProjectHeads } from "@/lib/projects";

// const components = { Scene };

export default async function page({ params }: { params: { slug: string } }) {
  const project = await ProjectController.getProject(params.slug);

  return (
    <div
      style={{ animationFillMode: "forwards" }}
      className="animate-fadeInUp opacity-0"
    >
      {/* @ts-expect-error Server Component */}
      {project && <MDXRemote source={project.attributes.content} />}
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await ProjectController.getAllProjects();

  if (projects.data) {
    return projects.data?.map((project) => ({
      slug: project.attributes.slug,
    }));
  }

  return []
}
