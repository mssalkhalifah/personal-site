"use client";

import ProjectCard, {
  IProjectCard,
} from "@/components/cards/project/ProjectCard";
import useObserver from "@/hooks/useObserver";
import { useEffect, useState } from "react";

export interface IProjectCarousel {
  items: IProjectCard[];
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

const ProjectCarousel: React.FC<IProjectCarousel> = ({ items }) => {
  let index = 0;
  const [isFocus, setFocus] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const [currIndex, setCurrIndex] = useState<number>(0);

  const [observer, parentRef, addNode, childRefs] = useObserver(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.intersectionRatio >= 1) {
          const targetIndex = Number(entry.target.id);
          let newFocusList = [...isFocus];
          newFocusList.splice(targetIndex, 1, true);
          setCurrIndex(targetIndex);
          setFocus(newFocusList);
        }
      }
    },
    "0% -25% 0% -25%",
    1.0
  );

  useEffect(() => {
    let i = 0;
    setCurrIndex(i);
    childRefs.current.forEach((child) => (child.id = `${i++}`));
  }, [observer, childRefs]);

  return (
    <div className="flex flex-col">
      <div
        ref={parentRef}
        id="slider"
        className="scrollbar-hide flex max-w-[1104px] snap-x overflow-x-scroll"
      >
        <div className="invisible min-w-fit">
          <ProjectCard />
        </div>
        {items.map((item) => {
          return (
            <div
              className="min-w-fit snap-center"
              ref={addNode}
              key={item.title! + index}
            >
              <ProjectCard
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
          <ProjectCard />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() =>
            move(parentRef.current, -1, childRefs.current.length, currIndex)
          }
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Prev
        </button>
        <button
          onClick={() =>
            move(parentRef.current, 1, childRefs.current.length, currIndex)
          }
          className="my-1 mx-3 rounded-md bg-yellow-400 py-1 px-2 text-zinc-900"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
