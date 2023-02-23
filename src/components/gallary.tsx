"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Card, { CardProps } from "./Card";

interface GallaryProps {
  items: CardProps[];
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

export default function Gallary({ items }: GallaryProps) {
  let index = 0;
  const refs = useRef<HTMLDivElement[]>([]);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isFocus, setFocus] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const [currIndex, setCurrIndex] = useState<number>(0);
  const observer = useRef<IntersectionObserver>(null);
  const addNode = useCallback((node: HTMLDivElement) => {
    refs.current.push(node);
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

    if (refs.current) {
      const lastPos = refs.current.length - 1;
      refs.current[lastPos].id = `${lastPos}`;
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
        {items.map((item) => {
          return (
            <div
              className="min-w-fit snap-center"
              ref={addNode}
              key={item.title! + index}
            >
              <Card
                tags={item.tags}
                imageUrl={item.imageUrl}
                url={item.url}
                isFocus={isFocus[index++]}
                title={item.title}
              />
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
