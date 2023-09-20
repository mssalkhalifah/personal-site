import ProjectCard from "@/components/cards/project2/ProjectCard";
import { Project } from "@/lib/project/project.interfaces";

export interface ProjectSection {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSection> = ({
  projects,
}): JSX.Element => {
  return (
    <div className="grid grid-rows-3 gap-4">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} horizontal={true} />;
      })}
    </div>
  );
};

export default ProjectSection;
