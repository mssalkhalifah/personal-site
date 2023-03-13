import PostList from "@/components/layouts/list/posts/PostList";
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
    });
  });

  return (
    <div className="top-0 left-0 mx-4 grid grid-cols-6 grid-rows-1 gap-4">
      <div className="hidden lg:col-span-2 lg:block">
        <PostList postCards={postList} />
      </div>
      <div className="col-span-6 lg:col-span-4">
        <div className="prose prose-lg prose-invert max-w-none">{children}</div>
      </div>
    </div>
  );
}
