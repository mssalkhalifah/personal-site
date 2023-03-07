import PostList from "@/components/layouts/list/posts/PostList";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="top-8 flex h-full w-full justify-center pt-20">
      <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="hidden xl:col-span-3 xl:block">
          <PostList />
        </div>
        <div className="col-span-6 mx-4 xl:col-span-3 xl:mx-0">{children}</div>
      </div>
    </div>
  );
}
