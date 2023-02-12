import Image from "next/image";
import placeholder from "../../public/thumb_placeholder.png";

interface CardProps {
  title?: string;
  date?: string;
}

export default function Card({ title, date }: CardProps) {
  return (
    <div className="flex flex-col">
      <Image src={placeholder} width={320} height={180} alt={""} />
      <div className="mt-1 flex flex-col text-center">
        <h3 className="text-2xl font-bold">{title || "Title"}</h3>
        <p className="text-lg">{date || "00/00/20XX - 00/00/20XX"}</p>
      </div>
    </div>
  );
}
