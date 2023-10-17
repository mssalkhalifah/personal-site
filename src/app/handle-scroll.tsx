"use client";

import { DependencyList, useEffect, useMemo, useRef } from "react";

interface IHandleScroll {}

function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  cooldown: number,
) {
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs;

    lastArgs = args;

    if (isOnCooldown) {
      return;
    }

    window.setTimeout(run, cooldown);
  };

  return throttled;
}

const HandleScroll: React.FC<IHandleScroll> = () => {
  const isScrolling = useRef<boolean>(false);
  function useThrottle<Args extends unknown[]>(
    cb: (...args: Args) => void,
    cooldown: number,
    deps: DependencyList,
  ) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => throttle(cb, cooldown), deps);
  }
  const handleScroll = (
    index: number,
    elements: NodeListOf<HTMLElement>,
    direction: number,
  ) => {
    console.log("Scrolled");
    const nextElement = elements[index + 1];
    const prevElement = elements[index - 1];

    if (direction > 0 && nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
    }

    if (direction < 0 && prevElement) {
      prevElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // let isScrolling = false;
  const handleScrolling = useThrottle(
    (index: number, elements: NodeListOf<HTMLElement>, direction: number) => {
      if (!isScrolling.current) {
        handleScroll(index, elements, direction);
        isScrolling.current = true;
      }
    },
    100,
    [],
  );

  useEffect(() => {
    window.addEventListener("scrollend", () => (isScrolling.current = false));
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((element, index) => {
      element.addEventListener("wheel", (event: WheelEvent) =>
        handleScrolling(index, sectionElements, event.deltaY),
      );
    });
  }, [handleScrolling]);

  return <></>;
};

export default HandleScroll;
