import { mockPostCardProps } from "@/components/cards/post/PostCard.mocks";
import PostList from "@/components/layouts/list/posts/PostList";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const postList = [mockPostCardProps.base, mockPostCardProps.baseJs];

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
