import PostList from "@/components/layouts/list/posts/PostList";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="top-8 flex h-full w-full justify-center pt-20">
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <PostList />
        <div className="col-span-2">{children}</div>
      </div>
    </div>
  );
}
