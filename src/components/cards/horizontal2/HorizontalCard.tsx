import Stack from "@/components/tags/tag/stack";
import { Stacks } from "@/lib/stack/stack.interfaces";
import { formatIsoDateString } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export interface HorizontalCard {
  image: string;
  imageAlt: string;
  title: string;
  stacks: Stacks;
  description: string;
  startDate: string;
  endDate?: string | null;
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
    <div className="shadow-md p-2 dark:shadow-zinc-900 dark:bg-zinc-900 rounded-xl transition-all hover:sm:scale-105 pointer-events-none">
      <Link
        className="flex max-w-3xl flex-col sm:pointer-events-auto sm:flex-row"
        href={projectUrl}
      >
        <Image
          className="rounded-lg hidden sm:block sm:mr-3"
          src={image + "?resize=500x500"}
          alt={imageAlt}
          width={200}
          height={200}
        />
        <Image
          className="rounded-lg mx-auto block sm:hidden"
          src={image + "?resize=1280x720"}
          alt={imageAlt}
          width={640}
          height={360}
        />
        <div className="flex flex-col space-y-1 m-3 sm:m-0">
          <span className="text-2xl font-black">{title}</span>
          <div className="flex flex-wrap">
            {stacks.data &&
              stacks.data.map((stack) => (
                <div className="m-1" key={stack.attributes.uuid}>
                  <Stack title={stack.attributes.name} />
                </div>
              ))}
          </div>
          <div className="flex place-items-center space-x-2 border-b border-b-secondary w-fit">
            <span>{formatIsoDateString(startDate)}</span>
            <FaArrowRightLong className="min-w-[16px]" />
            <span>{endDate ? formatIsoDateString(endDate) : "Present"}</span>
          </div>
          <span>{description}</span>
        </div>
      </Link>
      <Link
        href={projectUrl}
        className="block text-center cursor-pointer bg-zinc-100 dark:bg-zinc-800 w-full px-2 py-1 rounded-xl shadow-md text-lg hover:scale-[1.02] pointer-events-auto sm:hidden"
      >
        Read more
      </Link>
    </div>
  );
};

export default HorizontalCard;
