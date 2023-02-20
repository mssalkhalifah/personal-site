"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Card from "./Card";

interface Project {
  title?: string;
  imgUrl?: string;
  date?: string;
}

interface GallaryProps {
  projects: Project[];
}

const move = (
  parentDiv: HTMLDivElement | null,
  direction: number,
  listSize: number,
  currIndex: number
) => {
  if (parentDiv) {
    if (
      (currIndex === 0 && direction < 0) ||
      (currIndex === listSize - 1 && direction > 0)
    )
      return;
    parentDiv.scrollBy({
      left: 200 * direction,
      behavior: "smooth",
    });
  }
};

export default function Gallary({ projects }: GallaryProps) {
  let index = 0;
  const refs = useRef<HTMLDivElement[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isFocus, setFocus] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );
  const [currIndex, setCurrIndex] = useState<number>(0);
  const observer = useRef<IntersectionObserver>(null);
  const addNode = useCallback((node: HTMLDivElement) => {
    refs.current.push(node);
    const lastPos = refs.current.length - 1;
    if (refs.current) {
      refs.current[lastPos].id = `${lastPos}`;
    }
  }, []);

  const handler = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.intersectionRatio >= 1) {
        const targetIndex = Number(entry.target.id);
        let newFocusList = [...isFocus];
        newFocusList.splice(targetIndex, 1, true);
        setCurrIndex(targetIndex);
        setFocus(newFocusList);
      }
    }
  };

  const getObserver = (
    ref: React.MutableRefObject<IntersectionObserver | null>
  ) => {
    const observer = ref.current;

    if (observer !== null) {
      return observer;
    }

    const newObserver = new IntersectionObserver(handler, {
      root: parentRef.current,
      rootMargin: "0% -25% 0% -25%",
      threshold: 1.0,
    });

    ref.current = newObserver;

    return newObserver;
  };

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const newObserver = getObserver(observer);

    for (const node of refs.current) {
      newObserver.observe(node);
    }

    if (parentRef.current) {
      const middleItem = refs.current[Math.ceil(refs.current.length / 2)];
      parentRef.current.scrollBy(middleItem.offsetWidth, 0);
    }

    return () => newObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <div
        ref={parentRef}
        id="slider"
        className="scrollbar-hide flex max-w-[1104px] snap-x overflow-x-scroll"
      >
        <div className="invisible min-w-fit">
          <Card />
        </div>
        {projects.map((project) => {
          return (
            <div
              className="min-w-fit snap-center"
              ref={addNode}
              key={project.title! + index}
            >
              <Card isFocus={isFocus[index++]} title={project.title} />
            </div>
          );
        })}
        <div className="invisible min-w-fit">
          <Card />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() =>
            move(parentRef.current, -1, refs.current.length, currIndex)
          }
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Prev
        </button>
        <button
          onClick={() =>
            move(parentRef.current, 1, refs.current.length, currIndex)
          }
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Next
        </button>
      </div>
    </div>
  );
}
