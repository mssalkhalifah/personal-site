import { Stacks } from "./stack.interfaces";

export default class StackController {
  static async getAllStacks(): Promise<Stacks> {
    let stacks: Stacks = {
      data: [],
    };

    if (!process.env.strapi_url) {
      console.error("getAllStacks: strapi_url is undefined");
      return stacks;
    }

    stacks = await fetch(`${process.env.strapi_url}stacks`, {
      headers: {
        Authorization: `Bearer ${process.env.strapi_api_key}`,
      },
    })
      .then((res) => res.json())
      .catch((error: TypeError) => {
        console.log("getAllStacks: \n\t" + error.cause);
        return { data: [] };
      });

    return stacks;
  }
}
