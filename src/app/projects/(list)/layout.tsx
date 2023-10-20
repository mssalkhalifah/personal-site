export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="prose prose-lg dark:prose-invert dark:prose-pre:bg-zinc-800 max-w-none">{children}</div>
    </div>
  );
}
