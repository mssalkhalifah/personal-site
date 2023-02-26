import Gallary from "@/components/gallary";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";
import { CardProps } from "@/components/Card";
import path from "node:path/posix";

async function getProjects() {
  const folder = path.join(process.cwd(), "public/posts/projects");
  const projects: CardProps[] = [];
  const files = readdirSync(folder).filter((file) => file.endsWith(".mdx"));
  const slugs = files.map((file) => {
    const dotIndex = file.lastIndexOf(".");
    const slug = file.substring(0, dotIndex);

    return "projects/" + slug;
  });

  for (let i = 0; i < files.length; i++) {
    const fileContent = readFileSync(folder + "/" + files[i], "utf8");
    const frontMatter = matter(fileContent);
    projects.push({
      title: frontMatter.data.title,
      url: slugs[i],
      tags: frontMatter.data.tags,
    });
  }

  return projects;
}

export default async function ProjectSection() {
  const projects = await getProjects();

  return <Gallary items={projects} />;
}
