import { Project } from "@/lib/project/project.interfaces";
import Image from "next/image";
import HorizontalPostCard from "../horizontal/HorizontalPostCard";

export interface ProjectCard {
  key: number;
  project: Project;
  horizontal?: boolean;
}

const ProjectCard: React.FC<ProjectCard> = ({
  key,
  project,
  horizontal = false,
}) => {
  const postImage = project.attributes.postImage.data;
  let imageData = { url: "", name: "" };

  if (postImage) {
    imageData.url =
      process.env.imageURL + postImage.attributes.formats.small.url;
    imageData.name = postImage.attributes.name;
  }

  return horizontal ? (
    <HorizontalPostCard
      title={project.attributes.title}
      date={project.attributes.startdate.toString()}
      tags={[]}
      description={project.attributes.description}
      url={""}
      imageUrl={imageData.url}
      imageAlt={imageData.name}
    />
  ) : (
    <div key={key} className="flex flex-col bg-primary p-2 rounded-lg">
      <div className="">
        <Image
          className="rounded-lg"
          width={400}
          height={400}
          src={imageData.url}
          alt={imageData.name}
        />
      </div>
      <div className="grid grid-rows-3">
        <div className="grid grid-cols-3 row-span-2 text-center gap-2 text-sm my-2">
          {project.attributes.stacks!.map((stack) => {
            return (
              <div
                key={stack.id}
                className={`${
                  stack.color
                    ? "bg-black"
                    : "bg-transparent text-transparent pointer-events-none"
                } rounded-lg h-fit px-1`}
              >
                {stack.name}
              </div>
            );
          })}
        </div>
        <h3 className="text-2xl text-secondary font-bold">
          {project.attributes.title}
        </h3>
        <div className="grid grid-rows-2">
          <p className="text-third">{project.attributes.shortDescription}</p>
          <div className="flex justify-center">
            <button className="bg-secondary mt-auto px-6 py-1 rounded-md text-lg">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
