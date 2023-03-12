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
      url: head.url,
      imageUrl: head.imageThumb,
      imageAlt: head.title,
      description: head.description,
      date: head.date,
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
