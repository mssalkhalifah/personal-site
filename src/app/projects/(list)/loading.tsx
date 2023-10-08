export default function Loading() {
  return (
    <div className="flex flex-col-reverse mx-2 lg:grid lg:grid-cols-8 lg:gap-10">
      <div className="mt-16 col-span-5 lg:mt-0">
        <div className="flex w-full animate-pulse flex-col justify-center">
          <div className="h-10 w-full bg-zinc-400"></div>

          <div className="mt-10 w-full space-y-2">
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="flex w-full space-x-2">
              <div className="h-4 w-1/4 bg-zinc-400"></div>
              <div className="h-4 w-9/12 bg-zinc-400"></div>
            </div>
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="h-4 w-full bg-zinc-400"></div>
          </div>

          <div className="mt-10 w-full space-y-2">
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="flex w-full space-x-2">
              <div className="h-4 w-1/2 bg-zinc-400"></div>
              <div className="h-4 w-1/2 bg-zinc-400"></div>
            </div>
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="flex w-full space-x-2">
              <div className="h-4 w-9/12 bg-zinc-400"></div>
              <div className="h-4 w-1/4 bg-zinc-400"></div>
            </div>
            <div className="h-4 w-full bg-zinc-400"></div>
            <div className="h-4 w-full bg-zinc-400"></div>
          </div>
        </div>
      </div>
      <div className="sticky top-16 col-span-3">
        <div className="flex w-full animate-pulse flex-col justify-center rounded-lg">
          <div className="h-5 w-full bg-zinc-400"></div>
          <div className="h-12 w-full bg-zinc-400 lg:h-28"></div>
        </div>
      </div>
    </div>
  );
}
