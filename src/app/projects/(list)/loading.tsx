export default function Loading() {
  return (
    <div className="flex w-full animate-pulse flex-col justify-center">
      <div className="h-10 w-full bg-zinc-200"></div>

      <div className="mt-10 w-full space-y-2">
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="flex w-full space-x-2">
          <div className="h-4 w-1/4 bg-zinc-200"></div>
          <div className="h-4 w-9/12 bg-zinc-200"></div>
        </div>
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="h-4 w-full bg-zinc-200"></div>
      </div>

      <div className="mt-10 w-full space-y-2">
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="flex w-full space-x-2">
          <div className="h-4 w-1/2 bg-zinc-200"></div>
          <div className="h-4 w-1/2 bg-zinc-200"></div>
        </div>
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="flex w-full space-x-2">
          <div className="h-4 w-9/12 bg-zinc-200"></div>
          <div className="h-4 w-1/4 bg-zinc-200"></div>
        </div>
        <div className="h-4 w-full bg-zinc-200"></div>
        <div className="h-4 w-full bg-zinc-200"></div>
      </div>
    </div>
  );
}
