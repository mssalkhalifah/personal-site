import { readFile } from "fs/promises";
import { readdirSync } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import Scene from "@/components/scene";
import path from "path";

const components = { Scene };

async function getProjectPostContent(slug: string): Promise<string> {
  const mdxPath = path.join(process.cwd(), "public/posts/projects");
  return await readFile(`${mdxPath}/`.concat(slug, ".mdx"), "utf8");
}

export default async function page({ params }: { params: { slug: string } }) {
  const fileContent = await getProjectPostContent(params.slug);
  const grayMatter = matter(fileContent);

  return (
    <div className="prose prose-invert">
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={grayMatter.content}
        compiledSource={""}
        components={components}
      />
      ;
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const folder = path.join(process.cwd(), "public/posts/projects");
  const files = readdirSync(folder).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => ({
    slug: file.substring(0, file.lastIndexOf(".")),
  }));
}
