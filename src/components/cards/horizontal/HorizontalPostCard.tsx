import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PlaceholderImage from "../../../../public/thumb_placeholder.jpg";

export interface IHorizontalPostCard {
  title: string;
  date: string;
  tags: string[];
  description: string;
  url: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  flip?: boolean;
}

const Tag: React.FC<{ title: string }> = ({ title }: { title: string }) => {
  return (
    <div className="rounded-md border-2 border-solid border-zinc-50 px-2 text-xs text-zinc-50 sm:text-sm md:border-zinc-600 md:text-zinc-600">
      {title}
    </div>
  );
};

const HorizontalPostCard: React.FC<IHorizontalPostCard> = ({
  title,
  date,
  tags,
  description,
  url,
  imageAlt,
  imageUrl,
  flip = false,
}): JSX.Element => {
  return (
    <div
      className={`relative flex h-60 w-full md:w-[700px] ${
        flip && "flex-row-reverse"
      } overflow-hidden rounded-md bg-zinc-100 text-zinc-50 shadow-lg md:text-zinc-900`}
    >
      <Image
        className="absolute opacity-100 md:opacity-0"
        src={imageUrl || PlaceholderImage}
        alt={imageAlt || "placeholder"}
        fill
      />
      <div className="absolute z-10 h-full w-full bg-zinc-900/50 md:bg-transparent"></div>
      <div className="relative hidden h-full w-96 md:inline-block">
        <Image
          className="object-cover"
          fill
          src={imageUrl || PlaceholderImage}
          alt={imageAlt || "placeholder"}
        />
      </div>
      <div className="z-10 mx-2 grid w-full grid-flow-col grid-cols-1 grid-rows-6 p-2">
        <div className="row-span-2">
          <h1 className="text-xl font-extrabold sm:text-4xl">{title}</h1>
          <div className="mt-1 flex space-x-2">
            {tags.map((tag) => {
              return <Tag key={tag} title={tag} />;
            })}
          </div>
        </div>
        <p className="row-span-3 overflow-hidden text-sm font-medium sm:text-lg">
          {description}
        </p>
        <div className="row-span-1">
          <div className="mt-1 flex w-full place-items-center justify-between">
            <Tag title={date} />
            <Link href={url}>
              <button className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-50 shadow-md transition-transform hover:scale-105 sm:text-sm">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPostCard;
