import { IPostCard } from "@/components/cards/post/PostCard";
import { getProjectHeads } from "@/lib/projects";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectHeads = await getProjectHeads();
  const postList: IPostCard[] = [];
  projectHeads.forEach((head) => {
    postList.push({
      title: head.title,
      url: "projects/" + head.url,
      imageUrl: head.imageThumb,
      imageAlt: head.title,
      description: head.description,
      date: head.date,
      tags: head.tags,
    });
  });

  return (
    <div className="container">
      <div className="prose prose-lg max-w-none">{children}</div>
    </div>
  );
}
// <div className="hidden lg:col-span-2 lg:block">
//   <PostList postCards={postList} />
// </div>
