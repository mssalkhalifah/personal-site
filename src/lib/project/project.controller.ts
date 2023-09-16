import { Projects } from "./project.interfaces";

export default class ProjectController {
  static async getAllProjects(): Promise<Projects> {
    const projects: Projects = await fetch(
      process.env.strapi_url +
        "projects?sort[0]=id&populate[0]=stacks&populate[1]=postImage",
      {
        headers: {
          Authorization: `Bearer ${process.env.strapi_api_key}`,
        },
      }
    ).then((res) => res.json());

    return projects;
  }
}
