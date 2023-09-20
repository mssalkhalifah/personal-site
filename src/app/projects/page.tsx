import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import ProjectController from "@/lib/project/project.controller";

export default async function page() {
  const projects = await ProjectController.getAllProjects();

  return (
    <div className="relative flex h-full w-full flex-col place-items-center justify-center">
      <div className="max-w-2xl space-y-4 container">
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
