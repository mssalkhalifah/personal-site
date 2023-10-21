export interface Stacks {
  data: Stack[];
}

export interface Stack {
  id: number;
  attributes: {
    name: string;
    uuid: string;
    color: string;
    url: string;
  };
}
