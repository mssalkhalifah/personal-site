import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface IPostCard {
  imageUrl: string | StaticImageData;
  imageAlt: string;
  url: string;
  date: string;
  title: string;
  description: string;
  tags?: string[];
  isSelected?: boolean;
}

const Tag: React.FC<{ title: string }> = ({ title }: { title: string }) => {
  return (
    <div className="rounded-md border-2 border-solid border-third px-2 text-xs text-third xl:text-sm">
      {title}
    </div>
  );
};

const PostCard: React.FC<IPostCard> = ({
  imageUrl,
  imageAlt,
  url,
  date,
  title,
  description,
  tags,
  isSelected = false,
}): JSX.Element => {
  return (
    <div
      className={`h-60 w-full overflow-hidden rounded-lg border-4 ${
        isSelected ? "border-fourth" : "border-primary"
      } xl:h-60 xl:w-96`}
    >
      <div className="flex h-60 w-full flex-col space-y-3 bg-secondary text-fourth shadow-md">
        <div className="m-4 h-12 space-y-2">
          <Link
            href={url}
            className="text-xl font-semibold underline hover:cursor-pointer xl:text-2xl"
          >
            {title}
          </Link>
          <div className="flex space-x-1">
            {tags?.map((tag, index) => {
              return <Tag key={index} title={tag} />;
            })}
          </div>
        </div>
        <div className="relative h-60 w-full">
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
