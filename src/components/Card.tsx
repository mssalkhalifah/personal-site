import Image from "next/image";
import placeholder from "../../public/thumb_placeholder.png";

export interface CardProps {
  title?: string;
  date?: string;
  url?: string;
}

export default function Card({ title, date, url }: CardProps) {
  return (
    <div className="m-2 flex flex-col">
      <Image src={url || placeholder} width={320} height={180} alt={""} />
      <div className="mt-1 flex flex-col text-center">
        <h3 className="text-2xl font-bold">{title || "Title"}</h3>
        <p className="text-lg">{date || "00/00/20XX - 00/00/20XX"}</p>
      </div>
    </div>
  );
}
