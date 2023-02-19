"use client";

import Image from "next/image";
import { useState } from "react";
import placeholder from "../../public/thumb_placeholder.png";

export interface CardProps {
  title?: string;
  date?: string;
  url?: string;
  isFocus?: boolean;
}

export default function Card({ title, date, url, isFocus = false }: CardProps) {
  const [isDown, setDown] = useState(false);
  const focus = isFocus ? "scale-105 opacity-100" : "scale-90 opacity-25";
  const buttonVisiblity = isFocus ? "visible h-full" : "invisible h-[0px]";
  const buttonClicked = isDown ? "scale-90" : "scale-100";
  return (
    <div className={`m-2 flex flex-col transition ${focus}`}>
      <Image src={url || placeholder} width={320} height={180} alt={""} />
      <div className="mt-1 flex flex-col text-center">
        <h3 className="text-2xl font-bold">{title || "Title"}</h3>
        <p className="text-lg">{date || "00/00/20XX - 00/00/20XX"}</p>
        <button
          onMouseDown={() => setDown(true)}
          onMouseUp={() => setDown(false)}
          className={`m-2 rounded-md bg-zinc-500 py-1 text-white transition hover:bg-zinc-700 ${buttonClicked} ${buttonVisiblity}`}
        >
          Hello
        </button>
      </div>
    </div>
  );
}
