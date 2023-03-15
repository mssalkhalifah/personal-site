import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "node:path/posix";

interface IProjectHead {
  title: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  imageThumb: string;
}

interface IProjectContent {
  content: string;
  imageSources?: string[];
}

const projectFolderPath = "public/posts/projects";

export async function getProject(slug: string): Promise<IProjectContent> {
  const fileContent = readFileSync(
    path.join(process.cwd(), projectFolderPath, slug + ".mdx")
  );
  const frontMatter = matter(fileContent);
  const project: IProjectContent = {
    content: frontMatter.content,
    imageSources: [],
  };

  return project;
}

export async function getProjectHeads(): Promise<IProjectHead[]> {
  const folder = path.join(process.cwd(), projectFolderPath);
  const files = readdirSync(folder).filter((file) => file.endsWith(".mdx"));
  const slugs = files.map((file) => {
    const dotIndex = file.lastIndexOf(".");
    const slug = file.substring(0, dotIndex);

    return slug;
  });

  const projectHeads: IProjectHead[] = [];

  files.forEach((file, index) => {
    const fileContent = readFileSync(folder + "/" + file, "utf8");
    const frontMatter = matter(fileContent);

    projectHeads.push({
      title: frontMatter.data.title,
      date: frontMatter.data.date,
      description: frontMatter.data.description,
      url: slugs[index],
      tags: frontMatter.data.tags,
      imageThumb: "/" + frontMatter.data.preview + ".jpg",
    });
  });

  return projectHeads;
}
