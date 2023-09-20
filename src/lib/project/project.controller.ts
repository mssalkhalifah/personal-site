import { Project, Projects } from "./project.interfaces";

export default class ProjectController {
  static async getAllProjects(): Promise<Projects> {
    const projects: Projects = await fetch(
      process.env.strapi_url +
        "projects?sort[0]=id&populate[0]=stacks&populate[1]=postImage",
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    ).then((res) => res.json());

    return projects;
  }

  static async getLatestProjects(numberOfProjects: number): Promise<Project[]> {
    const projects: Projects = await fetch(
      process.env.strapi_url +
        `projects?sort[0]=startdate&populate[0]=stacks&populate[1]=postImage&pagination[pageSize]=${numberOfProjects}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    ).then((res) => res.json());

    return projects.data || [];
  }

  static async getProject(slug: string): Promise<Project | null> {
    const projects: Projects = await fetch(
      process.env.strapi_url +
        `projects?populate[0]=stacks&populate[1]=postImage&filters[slug][$eq]=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    ).then((res) => res.json());

    return projects.data ? projects.data[0] : null;
  }
}
