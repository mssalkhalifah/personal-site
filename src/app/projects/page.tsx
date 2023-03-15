import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import { getProjectHeads } from "@/lib/projects";

export default async function page() {
  const projectHeads = await getProjectHeads();

  return (
    <div className="flex h-full w-full justify-center">
      <div className="mx-4 mb-2 space-y-3 sm:m-0">
        {projectHeads.map((head, index) => {
          return (
            <HorizontalPostCard
              key={head.title}
              title={head.title}
              date={head.date}
              tags={head.tags}
              description={head.description}
              url={"projects/" + head.url}
              imageUrl={head.imageThumb}
              imageAlt={head.title}
              flip={index % 2 !== 0}
            />
          );
        })}
      </div>
    </div>
  );
}
