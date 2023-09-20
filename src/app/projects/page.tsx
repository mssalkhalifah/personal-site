import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import ProjectController from "@/lib/project/project.controller";

export default async function page() {
  const projects = await ProjectController.getAllProjects();

  return (
    <div className="flex h-full w-full justify-center">
      <div className="mx-4 mb-2 space-y-3 sm:m-0">
        {projects.data &&
          projects.data.map((project, index) => {
            let tags: string[] = [];

            if (project.attributes.stacks) {
              tags = project.attributes.stacks.map((stack) => stack.name);
            }

            return (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 200 + 200}ms`,
                  animationFillMode: "forwards",
                }}
                className={`animate-fadeInUp opacity-0`}
              >
                <HorizontalPostCard
                  key={project.attributes.slug}
                  title={project.attributes.title}
                  date={project.attributes.createdAt}
                  description={project.attributes.description}
                  url={`projects/${project.attributes.slug}`}
                  imageUrl={
                    project.attributes.postImage.data
                      ? `${process.env.imageURL}` +
                        project.attributes.postImage.data?.attributes.url
                      : ""
                  }
                  imageAlt={""}
                  flip={false}
                  tags={tags}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
