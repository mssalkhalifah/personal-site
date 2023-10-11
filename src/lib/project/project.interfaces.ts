export interface Projects {
  data: Project[];
  meta: Meta;
}

export interface Project {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    stacks: {
      data: Stacks[];
    };
    postImage: PostImage;
    startdate: string;
    enddate: string | null;
    shortDescription: string;
  };
}

export interface Stacks {
  id: number;
  attributes: {
    name: string;
    uuid: string;
    color: string;
  };
}

export interface PostImage {
  data?: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: Formats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface Formats {
  large: Format;
  small: Format;
  medium: Format;
  thumbnail: Format;
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
