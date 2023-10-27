import Tag from "@/components/tags/tag/Tag";
import Stack from "@/components/tags/tag/stack";
import { PostImage } from "@/lib/project/project.interfaces";
import { Stacks } from "@/lib/stack/stack.interfaces";
import { getPostImage } from "@/utils/strapi-image";
import Image from "next/image";
import Link from "next/link";

interface ISmallCard {
  postImage: PostImage;
  stacks: Stacks;
  url?: string;
}

const SmallCard: React.FC<ISmallCard> = ({ postImage, stacks, url = "" }) => {
  const image = getPostImage(postImage, 416, 416);

  return (
    <div className="flex flex-col w-52">
      <Link
        href={url}
        className="relative h-52 rounded-xl w-52 overflow-hidden hover:outline hover:outline-blue-500 hover:outline-4"
      >
        <Image
          className="absolute h-full w-full hover:scale-105 transition-transform"
          src={image.imageUrl}
          alt={image.alternative}
          width={208}
          height={208}
          placeholder="blur"
          blurDataURL={image.thumbnail}
        />
      </Link>
      <div className="flex flex-wrap w-fit">
        {stacks.data.map((stack, index) => (
          <div className="mt-2 mr-2" key={index}>
            <Stack title={stack.attributes.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
