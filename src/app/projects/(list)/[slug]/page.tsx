import { MDXRemote } from "next-mdx-remote/rsc";
import Scene from "@/components/scene";
import { getProject, getProjectHeads } from "@/lib/projects";

const components = { Scene };

export default async function page({ params }: { params: { slug: string } }) {
  const projectContent = await getProject(params.slug);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={projectContent.content}
        compiledSource={""}
        components={components}
      />
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projectHeads = await getProjectHeads();

  return projectHeads.map((head) => ({
    slug: head.url,
  }));
}
