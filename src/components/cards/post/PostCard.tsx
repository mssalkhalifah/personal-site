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
    <div className="rounded-md border-2 border-solid border-zinc-600 px-2 text-xs text-zinc-600 xl:text-sm">
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
      className={`h-80 w-full overflow-hidden rounded-lg border-4 shadow-lg ${
        isSelected ? "border-blue-600" : "border-transparent"
      } xl:h-96 xl:w-96`}
    >
      <div className="flex h-full w-full flex-col space-y-3 bg-zinc-100 shadow-md">
        <div className="m-4 h-12 space-y-2">
          <h1 className="text-xl font-semibold text-zinc-900 xl:text-2xl">
            {title}
          </h1>
          <div className="flex space-x-1">
            {tags?.map((tag, index) => {
              return <Tag key={index} title={tag} />;
            })}
          </div>
        </div>
        <div className="relative h-60 w-full">
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="mx-4 h-16 overflow-hidden text-xs xl:text-base">
          <p className="text-zinc-600">{description}</p>
        </div>
        <div className="mx-4 flex h-16 place-items-center text-lg font-medium text-purple-600">
          <Link href={url} className="decoration-2 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
    //<div className="relative row-span-2 h-32 overflow-x-hidden xl:h-40">
    //  <Image
    //    className="object-cover"
    //    src={imageUrl || ""}
    //    alt={imageAlt || ""}
    //    fill
    //  />
    //</div>
    //<div className="row-span-2 mx-10 grid grid-cols-1 grid-rows-4 space-y-1">
    //  <div className="row-span-1">
    //    <h1 className="flex h-full place-items-center text-3xl font-medium text-zinc-900">
    //      {title}
    //    </h1>
    //  </div>
    //  <div className="row-span-2">
    //    <div className="hidden h-20 overflow-hidden text-zinc-600 xl:block">
    //      {description}
    //    </div>
    //  </div>
    //  <div className="row-span-1">
    //    <p className="text-zinc-600">{date}</p>
    //  </div>
    //</div>
  );
};

export default PostCard;
