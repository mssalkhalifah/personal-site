"use client";

import Image from "next/image";
import Tag from "./Tag";
import placeholder from "../../public/thumb_placeholder.png";

export interface CardProps {
  title?: string;
  date?: string;
  url?: string;
  isFocus?: boolean;
}

export default function Card({ title, date, url, isFocus = false }: CardProps) {
  const focus = isFocus ? "scale-105 opacity-100" : "scale-90 opacity-25";
  const buttonVisiblity = isFocus ? "visible h-full" : "invisible h-[0px]";
  return (
    <div
      className={`m-2 flex flex-col rounded-md bg-white p-4 text-zinc-900 transition ${focus}`}
    >
      <Image
        className="rounded-md shadow-md"
        src={url || placeholder}
        width={320}
        height={180}
        alt={""}
      />
      <div className="mt-1 flex flex-col text-center">
        <div className="mt-1 mb-2 flex justify-start">
          <Tag title="WebGl" color={0} />
          <Tag title="NodeJs" color={1} />
          <Tag title="JavaScript" color={2} />
        </div>
        <h3 className="text-2xl font-bold">{title || "Title"}</h3>
        <p className="text-lg">{date || "00/00/20XX - 00/00/20XX"}</p>
        <button
          className={`m-2 rounded-md bg-zinc-500 py-1 text-white transition-colors hover:bg-zinc-700 ${buttonVisiblity}`}
        >
          Check it out!
        </button>
      </div>
    </div>
  );
}
