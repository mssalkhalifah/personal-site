import { Project, Projects } from "./project.interfaces";

export default class ProjectController {
  static async getAllProjects(): Promise<Projects> {
    let projects = {
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

    if (!process.env.strapi_url) {
      console.error("getAllProjects: strapi_url is undefined");
      return projects;
    }

    projects = await fetch(
      "http://192.168.8.74:1337/api/projects?sort[0]=id&populate[0]=stacks&populate[1]=postImage",
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((error: TypeError) => {
        console.log("getAllProjects: \n\t" + error.cause);
        return [];
      });

    return projects;
  }

  static async getLatestProjects(numberOfProjects: number): Promise<Project[]> {
    let projects = {
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

    if (!process.env.strapi_url) {
      console.error("strapi_url is undefined");
      return [];
    }

    projects = await fetch(
      process.env.strapi_url +
        `projects?sort[0]=startdate&populate[0]=stacks&populate[1]=postImage&pagination[pageSize]=${numberOfProjects}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((error) => {
        console.log("getLatestProjects: " + error);
        return [];
      });

    return projects.data || [];
  }

  static async getProject(slug: string): Promise<Project | null> {
    if (!process.env.strapi_url) {
      console.error("strapi_url is undefined");
      return null;
    }

    const projects: Projects = await fetch(
      process.env.strapi_url +
        `projects?populate[0]=stacks&populate[1]=postImage&filters[slug][$eq]=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((error) => console.log("getProject: " + error));

    return projects.data ? projects.data[0] : null;
  }
}
