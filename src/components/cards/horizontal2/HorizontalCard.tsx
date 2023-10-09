import Stack from "@/components/tags/tag/stack";
import { Stacks } from "@/lib/stack/stack.interfaces";
import Image from "next/image";
import Link from "next/link";

export interface HorizontalCard {
  image: string;
  imageAlt: string;
  title: string;
  stacks: Stacks;
  description: string;
  startDate: Date;
  endDate: Date;
  projectUrl: string;
}

const HorizontalCard: React.FC<HorizontalCard> = ({
  stacks,
  image,
  imageAlt,
  title,
  endDate,
  startDate,
  description,
  projectUrl,
}) => {
  return (
    <Link
      href={projectUrl}
      className="grid grid-cols-6 bg-primary shadow-lg p-2 text-secondary rounded-xl transition-transform hover:scale-105"
    >
      <div className="col-span-2 p-1">
        <Image
          className="rounded-lg"
          src={image + "?resize=200x200"}
          alt={imageAlt}
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-4 flex flex-col space-y-1">
        <span className="text-2xl font-black">{title}</span>
        <div className="flex flex-wrap">
          {stacks.data.map((stack) => (
            <div className="m-1" key={stack.attributes.uuid}>
              <Stack title={stack.attributes.name} />
            </div>
          ))}
        </div>
        <span>{description}</span>
      </div>
    </Link>
  );
};

export default HorizontalCard;
