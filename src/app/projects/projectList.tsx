"use client";

import HorizontalCard from "@/components/cards/horizontal2/HorizontalCard";
import SearchBar from "@/components/input/searchbar";
import { Project, Projects } from "@/lib/project/project.interfaces";
import { Stacks } from "@/lib/stack/stack.interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface ProjectList {
  projects: Projects;
  stacks: Stacks;
  baseImageURL: string;
}

const ProjectList: React.FC<ProjectList> = ({
  projects,
  baseImageURL,
  stacks,
}) => {
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
      const stacks = project.attributes.stacks.data;
      const tagFilter = stacks.filter((stack) =>
        currentSelectedTags.includes(stack.attributes.name),
      );

      return tagFilter.length > 0;
    };

    if (projects.data && (currentSelectedTags.length > 0 || searchResult)) {
      let filteredProjects = projects.data;

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
          tags={stacks.data.map((stack) => stack.attributes.name)}
        />
      </div>
      <ul className="space-y-2 mt-4">
        <AnimatePresence>
          {projectList.map((project, index) => {
            const projectImage =
              project.attributes.postImage.data?.attributes.url;
            const image = `${baseImageURL}${projectImage}`;

            return (
              <motion.li
                layout
                key={project.id}
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
                <HorizontalCard
                  image={image}
                  imageAlt={
                    project.attributes.postImage.data?.attributes.name || ""
                  }
                  title={project.attributes.title}
                  stacks={project.attributes.stacks}
                  description={project.attributes.description}
                  startDate={new Date()}
                  endDate={new Date()}
                  projectUrl={`projects/${project.attributes.slug}`}
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

// <HorizontalPostCard
//   key={project.attributes.slug}
//   title={project.attributes.title}
//   date={project.attributes.createdAt}
//   description={project.attributes.description}
//   url={`projects/${project.attributes.slug}`}
//   imageUrl={
//     project.attributes.postImage.data
//       ? `${baseImageURL}` +
//         project.attributes.postImage.data?.attributes.url
//       : ""
//   }
//   imageAlt={""}
//   flip={false}
//   tags={tags}
// />
