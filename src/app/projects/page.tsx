import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import { getProjectHeads } from "@/lib/projects";

export default async function page() {
  const projectHeads = await getProjectHeads();

  return (
    <div className="left-0 top-0 mx-2 max-h-fit w-[720px] flex-col space-y-3 md:mx-0">
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
  );
}
