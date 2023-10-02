import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <div className="rounded-md h-fit border-2 border-solid border-third px-2 text-xs text-third sm:text-sm">
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
    <div className="relative grid grid-cols-6 bg-secondary rounded-lg m-3 overflow-hidden transition-all sm:m-0">
      <div className="absolute w-full h-full z-10 bg-secondary/60 block sm:hidden" />
      <Image
        className="object-cover block sm:hidden"
        src={imageUrl}
        alt={imageAlt}
        fill
      />
      <div className="relative col-span-2 hidden sm:block">
        <Image
          className="absolute object-cover"
          src={imageUrl}
          alt={imageAlt}
          fill
        />
      </div>
      <div className="grid grid-rows-8 m-2 col-span-6 z-20 xs:grid-rows-6 sm:col-span-4">
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <div className="grid grid-cols-2 text-center gap-2 2xs:grid-cols-3 xs:grid-cols-4">
          {tags.map((tag, index) => {
            return <Tag key={index} title={tag} />;
          })}
        </div>
        <div className="row-span-4 my-1 xs:row-span-3">
          <p>{description}</p>
        </div>
        <div className="row-span-1 flex justify-between items-center space-y-2 flex-col 2xs:flex-row 2x:space-y-0">
          <Tag title={date} />
          <Link href={url}>
            <button className="bg-primary text-secondary px-4 rounded-md w-full 2xs:w-[100px]">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPostCard;
