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
    <div className="rounded-md border-2 border-solid border-third px-2 text-xs text-third sm:text-sm">
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
      className={`relative flex h-40 w-full md:h-60 md:w-[700px] ${
        flip && "flex-row-reverse"
      } overflow-hidden rounded-md bg-secondary text-fourth shadow-lg md:text-primary`}
    >
      <Image
        className="absolute opacity-100 md:opacity-0"
        src={imageUrl || PlaceholderImage}
        alt={imageAlt || "placeholder"}
        fill
      />
      <div className="absolute z-10 h-full w-full bg-primary/60 md:bg-transparent"></div>
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
              <button className="rounded-md bg-fourth px-2 py-1 text-xs text-primary shadow-md transition-transform hover:scale-105 sm:text-sm">
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
