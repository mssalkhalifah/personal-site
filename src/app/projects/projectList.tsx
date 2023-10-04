"use client";

import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import SearchBar from "@/components/input/searchbar";
import { Project, Projects } from "@/lib/project/project.interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface ProjectList {
  projects: Projects;
  baseImageURL: string;
}

const ProjectList: React.FC<ProjectList> = ({ projects, baseImageURL }) => {
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [currentSelectedTags, setSelectedTags] = useState<string[]>([]);
  const [projectList, setProjectList] = useState<Project[]>(
    projects.data || [],
  );

  useEffect(() => {
    const filterProjects = (project: Project) => {
      const title = project.attributes.title.toLowerCase();
      const description = project.attributes.description.toLowerCase();
      const query = searchResult?.toLowerCase();
      const hasTitle = title.indexOf(query || "") >= 0;
      const hasDescription = description.indexOf(query || "") >= 0;

      return hasTitle || hasDescription;
    };

    const filterByStacks = (project: Project) => {
      const stacks = project.attributes.stacks;
      const tagFilter = stacks.filter((stack) =>
        currentSelectedTags.includes(stack.name),
      );

      return tagFilter.length > 0;
    };

    if (projects.data && (currentSelectedTags.length > 0 || searchResult)) {
      let filteredProjects = projects.data

      if (currentSelectedTags.length > 0) {
        filteredProjects = filteredProjects.filter(filterByStacks);
      }

      if (searchResult) {
        filteredProjects = filteredProjects.filter(filterProjects);
      }

      setProjectList(filteredProjects);
    } else {
      setProjectList(projects.data || []);
    }
  }, [searchResult, projects, currentSelectedTags]);

  return (
    <div className="max-w-3xl container mx-auto">
      <div className="mx-2 sm:mx-0">
        <SearchBar
          onSearch={(query) => setSearchResult(query)}
          onTagSelect={(tags) => setSelectedTags(tags)}
          tags={["OutSystems", "React", "Json"]}
        />
      </div>
      <ul className="space-y-2 mt-4">
        <AnimatePresence>
          {projectList.map((project) => {
            let tags: string[] = [];

            if (project.attributes.stacks) {
              tags = project.attributes.stacks.map((stack) => stack.name);
            }

            return (
              <motion.li
                layout
                key={project.attributes.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  ease: "easeInOut",
                  layout: {
                    type: "tween",
                    ease: "easeInOut",
                  },
                }}
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
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ProjectList;
