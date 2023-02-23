import { readFile } from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

async function getProjectPostContent(slug: string): Promise<string> {
  return await readFile("posts/projects/".concat(slug, ".mdx"), "utf8");
}

export default async function page({ params }: { params: { slug: string } }) {
  const fileContent = await getProjectPostContent(params.slug);
  const grayMatter = matter(fileContent);

  return (
    <div className="prose prose-invert">
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={grayMatter.content} compiledSource={""} />;
    </div>
  );
}
