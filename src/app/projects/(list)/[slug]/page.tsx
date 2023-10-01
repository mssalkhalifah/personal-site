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
      {"Hello World"}
    </div>
  );
}

// {/* @ts-expect-error Server Component */}
// <MDXRemote source={project?.attributes.content} />
// <MDXRemote source={projectContent.content} components={components} />
// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const projectHeads = await getProjectHeads();
//
//   return projectHeads.map((head) => ({
//     slug: head.url,
//   }));
// }
