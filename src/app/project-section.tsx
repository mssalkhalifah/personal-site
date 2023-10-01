import ProjectCard from "@/components/cards/project2/ProjectCard";
import { Project } from "@/lib/project/project.interfaces";

export interface ProjectSection {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSection> = ({
  projects,
}): JSX.Element => {
  return (
    <>
      <div className="hidden grid-rows-6 gap-2 max-w-3xl lg:hidden sm:grid">
        {projects.length > 0 && (
          <>
            <div className="row-span-2">
              {projects.at(0) && (
                <ProjectCard
                  key={projects.at(0)!.id}
                  project={projects.at(0)!}
                  horizontal={true}
                />
              )}
            </div>
            {projects.at(1) && projects.at(2) ? (
              <>
                <div className="grid grid-cols-2 gap-2 row-span-4">
                  <ProjectCard
                    key={projects.at(1)!.id}
                    project={projects.at(1)!}
                    horizontal={false}
                  />
                  <ProjectCard
                    key={projects.at(2)!.id}
                    project={projects.at(2)!}
                    horizontal={false}
                  />
                </div>
                <div className="row-span-2">
                  <ProjectCard
                    key={projects.at(0)!.id}
                    project={projects.at(0)!}
                    horizontal={true}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 row-span-4">
                  <ProjectCard
                    key={projects.at(1)!.id}
                    project={projects.at(1)!}
                    horizontal={false}
                  />
                  <ProjectCard
                    key={projects.at(2)!.id}
                    project={projects.at(2)!}
                    horizontal={false}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
      <div className="hidden grid-cols-3 gap-2 lg:grid">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={index} project={project} horizontal={false} />
          );
        })}
      </div>
      <div className="flex flex-col sm:hidden">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={index} project={project} horizontal={true} />
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;
