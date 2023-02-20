export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full place-items-center justify-center">
      {children}
    </div>
  );
}
