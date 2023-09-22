"use client";

import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import SearchBar from "@/components/input/searchbar";
import { Project, Projects } from "@/lib/project/project.interfaces";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface ProjectList {
  projects: Projects;
  baseImageURL: string;
}

const ProjectList: React.FC<ProjectList> = ({ projects, baseImageURL }) => {
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [projectList, setProjectList] = useState<Project[]>(
    projects.data || [],
  );

  useEffect(() => {
    const filterProjects = (project: Project) => {
      const title = project.attributes.title.toLowerCase();
      const description = project.attributes.description.toLowerCase();
      const query = searchResult?.toLowerCase();

      return (
        query && (title.indexOf(query) >= 0 || description.indexOf(query) >= 0)
      );
    };

    if (searchResult && projects.data) {
      const filteredProjects = projects.data.filter(filterProjects);
      setProjectList(filteredProjects);
    } else {
      setProjectList(projects.data || []);
    }
  }, [searchResult, projects]);

  return (
    <div className="relative flex h-full w-full flex-col place-items-center justify-center">
      <div className="max-w-2xl space-y-4 container">
        <div className="mx-2 sm:mx-0">
          <SearchBar
            onSearch={(query) => setSearchResult(query)}
            tags={["OutSystem", "React"]}
          />
        </div>
        {projects.data &&
          projectList.map((project, index) => {
            let tags: string[] = [];

            if (project.attributes.stacks) {
              tags = project.attributes.stacks.map((stack) => stack.name);
            }

            return (
              <motion.div
                
                // initial={{ opacity: 0, y: 5, dela }}
                animate={{ opacity: 1, y: 0 }}
                key={index}
              >
                <HorizontalPostCard
                  key={project.attributes.slug}
                  title={project.attributes.title}
                  date={project.attributes.createdAt}
                  description={project.attributes.description}
                  url={`projects/${project.attributes.slug}`}
                  imageUrl={
                    project.attributes.postImage.data
                      ? `${baseImageURL}` +
                        project.attributes.postImage.data?.attributes.url
                      : ""
                  }
                  imageAlt={""}
                  flip={false}
                  tags={tags}
                />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
