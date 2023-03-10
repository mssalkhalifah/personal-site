import { mockPostCardProps } from "@/components/cards/post/PostCard.mocks";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import PostList from "@/components/layouts/list/posts/PostList";
import path from "node:path/posix";
import { IPostCard } from "@/components/cards/post/PostCard";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const folder = path.join(process.cwd(), "public/posts/projects");
  const files = readdirSync(folder).filter((file) => file.endsWith(".mdx"));
  const slugs = files.map((file) => {
    const dotIndex = file.lastIndexOf(".");
    const slug = file.substring(0, dotIndex);

    return "projects/" + slug;
  });

  const postList: IPostCard[] = [];
  files.forEach((file, index) => {
    const fileContent = readFileSync(folder + "/" + file, "utf8");
    const frontMatter = matter(fileContent);

    postList.push({
      title: frontMatter.data.title,
      url: slugs[index],
      imageUrl: mockPostCardProps.base.imageUrl,
      description: mockPostCardProps.base.description,
    });
  });

  return (
    <div className="top-8 flex h-full w-full justify-center pt-20">
      <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="hidden xl:col-span-3 xl:block">
          <PostList postCards={postList} />
        </div>
        <div className="col-span-6 mx-4 xl:col-span-3 xl:mx-0 xl:w-[583.9px]">
          {children}
        </div>
      </div>
    </div>
  );
}
