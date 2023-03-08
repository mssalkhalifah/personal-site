import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface IPostCard {
  imageUrl?: string | StaticImageData;
  imageAlt?: string;
  url?: string;
  date?: string;
  title?: string;
  description?: string;
}

const PostCard: React.FC<IPostCard> = ({
  imageUrl,
  imageAlt,
  url,
  date,
  title,
  description,
}): JSX.Element => {
  return (
    <Link href={url || ""}>
      <div className="flex max-w-fit">
        <div className="relative mr-2 h-[150px] w-[150px] overflow-x-hidden rounded-lg">
          <Image
            className="object-cover"
            src={imageUrl || ""}
            alt={imageAlt || ""}
            fill
          />
        </div>
        <div className="max-w-sm">
          <p className="text-zinc-400">{date}</p>
          <h1 className="my-2 text-lg font-bold text-zinc-200">{title}</h1>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;