import { Stack, Stacks } from "./stack.interfaces";

export default class StackController {
  private static apiHeader = {
    Authorization: `Bearer ${process.env.strapi_api_key}`,
  };

  static async getAllStacks(): Promise<Stacks> {
    let stacks: Stacks = {
      data: [],
    };

    if (!process.env.strapi_url) {
      console.error("getAllStacks: strapi_url is undefined");
      return stacks;
    }

    stacks = await fetch(`${process.env.strapi_url}stacks`, {
      headers: StackController.apiHeader,
    })
      .then((res) => res.json())
      .catch((error: TypeError) => {
        console.log("getAllStacks: \n\t" + error.message);
        return { data: [] };
      });

    return stacks;
  }

  static async getStackByName(name: string): Promise<Stack> {
    let stack: Stack = {
      id: 0,
      attributes: {
        name: "",
        uuid: "",
        color: "",
        url: "",
      },
    };

    try {
      const response: Stacks = await fetch(
        `${process.env.strapi_url}stacks?filters[name][$eqi]=${name}`,
        {
          headers: StackController.apiHeader,
        },
      ).then((res) => res.json());

      if (response && response.data) stack = response.data[0];

      return stack;
    } catch (error) {
      console.error(error);
      return stack;
    }
  }
}
