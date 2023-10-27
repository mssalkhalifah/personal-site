import { PostImage } from "@/lib/project/project.interfaces";

interface IGetPostImage {
  thumbnail: string;
  imageUrl: string;
  alternative: string;
}

const baseImageUrl = process.env.imageURL;

export const getPostImage = (
  postImage: PostImage,
  width?: number,
  height?: number,
): IGetPostImage => {
  const result: IGetPostImage = {
    imageUrl: postImage.data?.attributes.url || "",
    thumbnail: postImage.data?.attributes.formats.thumbnail.url || "",
    alternative: postImage.data?.attributes.name || "",
  };

  let resize = "";
  if (width && height) {
    resize = `resize=${width}x${height}`;
  }

  result.imageUrl = `${baseImageUrl}${result.imageUrl}?${resize}`;
  result.thumbnail = `${baseImageUrl}${result.thumbnail}?${resize}`;

  return result;
};
