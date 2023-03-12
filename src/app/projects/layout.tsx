export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="top-8 flex h-full w-full justify-center pt-20">
      {children}
    </div>
  );
}
