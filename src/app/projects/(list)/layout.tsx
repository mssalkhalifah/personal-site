export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="prose prose-lg max-w-none">{children}</div>
    </div>
  );
}
