import logger from "@/logger";
import { Project, Projects } from "./project.interfaces";

export default class ProjectController {
  private static input = `${process.env.strapi_url}projects`;
  private static header = {
    Authorization: `Bearer ${process.env.strapi_api_key}`,
  };

  static async getAllProjects(): Promise<Projects> {
    if (!process.env.strapi_url) {
      logger.error(`${this.name} strapi_url is undefined`);
      return this.setDefaultValues(null);
    }

    let projects: Projects = await fetch(
      `${this.input}?sort[0]=id&populate[0]=stacks&populate[1]=postImage`,
      {
        headers: this.header,
        next: { tags: ["projects"] },
      },
    )
      .then((res) => res.json())
      .catch((error: TypeError) => {
        logger.error(`${this.name} ${error.cause}`);
        return [];
      });

    return this.setDefaultValues(projects);
  }

  static async getLatestProjects(numberOfProjects: number): Promise<Project[]> {
    if (!process.env.strapi_url) {
      console.error("strapi_url is undefined");
      return [];
    }

    let projects: Projects = await fetch(
      `${this.input}?sort[0]=startdate&populate[0]=stacks&populate[1]=postImage&pagination[pageSize]=${numberOfProjects}`,
      {
        headers: this.header,
        next: { tags: ["projects"] },
      },
    )
      .then((res) => res.json())
      .catch((error) => {
        console.log("getLatestProjects: " + error);
      });

    projects = this.setDefaultValues(projects);

    return projects.data || [];
  }

  static async getProject(slug: string): Promise<Project | null> {
    if (!process.env.strapi_url) {
      console.error("strapi_url is undefined");
      return null;
    }

    const projects: Projects = await fetch(
      `${this.input}?populate[0]=stacks&populate[1]=postImage&filters[slug][$eq]=${slug}`,
      {
        headers: this.header,
        next: { tags: ["projects"] },
      },
    )
      .then((res) => res.json())
      .catch((error) => console.log("getProject: " + error));

    const response = this.setDefaultValues(projects).data[0] || null;

    return response;
  }

  private static setDefaultValues(projects?: Projects | null): Projects {
    if (!projects) {
      projects = {
        data: [],
        meta: {
          pagination: {
            page: 0,
            pageSize: 0,
            pageCount: 0,
            total: 0,
          },
        },
      };

      return projects;
    }

    projects.data = projects.data || [];
    projects.data.forEach((project) => {
      project.attributes.stacks.data = project.attributes.stacks.data || [];
    });

    return projects;
  }
}
