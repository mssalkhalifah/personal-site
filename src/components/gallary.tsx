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

export default function Gallary({ projects }: GallaryProps) {
  let index = 0;
  const refs = useRef<HTMLDivElement[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isFocus, setFocus] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );
  const observer = useRef<IntersectionObserver>(null);
  const addNode = useCallback((node: HTMLDivElement) => {
    refs.current.push(node);
    const lastPos = refs.current.length - 1;
    refs.current[lastPos].id = `${lastPos}`;
  }, []);

  const handler = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.intersectionRatio >= 1) {
        const targetIndex = Number(entry.target.id);
        let newFocusList = [...isFocus];
        newFocusList.splice(targetIndex, 1, true);
        setFocus(newFocusList);
      }
    }
  };

  const getObserver = (
    ref: React.MutableRefObject<IntersectionObserver | null>
  ) => {
    let observer = ref.current;

    if (observer !== null) {
      return observer;
    }

    let newObserver = new IntersectionObserver(handler, {
      root: parentRef.current,
      rootMargin: "0% -20% 0% -20%",
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
        className="flex max-w-screen-lg snap-x overflow-x-scroll px-20"
      >
        <div className="invisible min-w-fit">
          <Card />
        </div>
        {projects.map((project) => {
          return (
            <div
              className="min-w-fit snap-center"
              ref={addNode}
              key={project.title}
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
          onClick={() => {
            parentRef.current?.scrollBy({
              left: -100,
              behavior: "smooth",
            });
          }}
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Prev
        </button>
        <button
          onClick={() => {
            parentRef.current?.scrollBy({
              left: 100,
              behavior: "smooth",
            });
          }}
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Next
        </button>
      </div>
    </div>
  );
}
