import { IPostCard } from "./PostCard";
import PlaceholderImage from "../../../../public/thumb_placeholder.png";

const base: IPostCard = {
  imageUrl: PlaceholderImage,
  imageAlt: "base",
  url: "/projects/hello",
  date: "5/2/2022",
  title: "This is the base title",
  description:
    "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
};

export const mockPostCardProps = {
  base,
};
