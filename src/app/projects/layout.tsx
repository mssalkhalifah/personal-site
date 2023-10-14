export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto pt-[88px]">{children}</div>;
}
