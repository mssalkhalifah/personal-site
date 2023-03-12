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
    <Link href={url || ""} className="flex h-40 w-full overflow-hidden">
      <div className="relative mr-2 h-40 w-40 overflow-x-hidden rounded-lg">
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
    </Link>
  );
};

export default PostCard;
