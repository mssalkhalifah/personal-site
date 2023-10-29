import logger from "@/logger";
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

    const query = `${process.env.strapi_url}stacks`;
    stacks = await fetch(query, {
      headers: StackController.apiHeader,
      next: { tags: ["stacks"] },
    })
      .then((res) => res.json())
      .catch((error: TypeError) => {
        console.log("getAllStacks: \n\t" + error.message);
        return { data: [] };
      });

    logger.info(
      `${query} ${this.name}.${this.getAllStacks.name} ${JSON.stringify(
        stacks,
      )}`,
    );

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

    const query = `${process.env.strapi_url}stacks?filters[name][$eqi]=${name}`;

    try {
      const response: Stacks = await fetch(query, {
        headers: StackController.apiHeader,
        next: { tags: ["stacks"] },
      }).then((res) => res.json());

      if (response && response.data) stack = response.data[0];

      logger.info(
        `${query} ${this.name}.${this.getStackByName.name} ${JSON.stringify(
          stack,
        )}`,
      );

      return stack;
    } catch (error) {
      console.error(error);
      return stack;
    }
  }
}
