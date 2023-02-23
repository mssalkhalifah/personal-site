"use client";

import Image from "next/image";
import Tag from "./Tag";
import placeholder from "../../public/thumb_placeholder.png";
import Link from "next/link";

export interface CardProps {
  title?: string;
  date?: string;
  imageUrl?: string;
  url?: string;
  tags?: string[];
  isFocus?: boolean;
}

export default function Card({
  title,
  date,
  imageUrl,
  url,
  tags,
  isFocus = false,
}: CardProps) {
  let colorIndex = 0;
  const focus = isFocus ? "scale-105 opacity-100" : "scale-90 opacity-25";
  const buttonVisiblity = isFocus ? "visible h-full" : "invisible h-[0px]";
  return (
    <div
      className={`m-2 flex flex-col rounded-md bg-white p-4 text-zinc-900 transition ${focus}`}
    >
      <Image
        className="rounded-md shadow-md"
        src={imageUrl || placeholder}
        width={320}
        height={180}
        alt={""}
      />
      <div className="mt-1 flex flex-col text-center">
        <div className="mt-1 mb-2 flex justify-start">
          {tags &&
            tags.map((tag) => {
              return (
                <Tag key={colorIndex + tag} title={tag} color={colorIndex++} />
              );
            })}
        </div>
        <h3 className="text-2xl font-bold">{title || "Title"}</h3>
        <p className="text-lg">{date || "00/00/20XX - 00/00/20XX"}</p>
        <Link
          href={url || ""}
          className={`m-2 rounded-md bg-zinc-500 py-1 text-white transition-colors hover:bg-zinc-700 ${buttonVisiblity}`}
        >
          <button>Check it out!</button>
        </Link>
      </div>
    </div>
  );
}
