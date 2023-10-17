"use client";

import { dir } from "console";
import { useTh } from "leva/dist/declarations/src/styles";
import { DependencyList, useEffect, useMemo, useRef, useState } from "react";

interface IHandleScroll {}

function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

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
  const touchStartY = useRef<number>(0);
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
    console.log("Scrolled", touchStartY);
    const nextElement = elements[index + 1];
    const prevElement = elements[index - 1];

    if (isMobile()) {
      direction = touchStartY.current - direction;
    }

    if (direction > 0 && nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
    }

    if (direction < 0 && prevElement) {
      prevElement.scrollIntoView({ behavior: "smooth" });
    }

    touchStartY.current = 0;
  };

  var ignore = false;
  function endScrolling() {
    if (ignore) {
      return;
    }
    ignore = true;
    setTimeout(() => (ignore = false), 600);
    console.log("scroll ended");
    isScrolling.current = false;
  }

  const handleScrolling = useThrottle(
    (index: number, elements: NodeListOf<HTMLElement>, direction: number) => {
      if (!isScrolling.current) {
        handleScroll(index, elements, direction);
        isScrolling.current = true;
      }
    },
    600,
    [],
  );

  useEffect(() => {
    window.addEventListener("wheel", () => endScrolling());
    window.addEventListener("touchend", () => endScrolling());

    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((element, index) => {
      element.addEventListener("wheel", (event: WheelEvent) =>
        handleScrolling(index, sectionElements, event.deltaY),
      );
      element.addEventListener("touchmove", (event: TouchEvent) => {
        event.preventDefault();
        handleScrolling(index, sectionElements, event.touches[0].clientY);
      });
    });

    window.addEventListener("touchstart", (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    });

    return () => {
      window.removeEventListener("wheel", () => endScrolling);
      window.removeEventListener("touchend", () => endScrolling);
      window.removeEventListener("touchstart", (event: TouchEvent) => {
        touchStartY.current = event.touches[0].clientY;
      });

      sectionElements.forEach((element, index) => {
        element.removeEventListener("wheel", (event: WheelEvent) =>
          handleScrolling(index, sectionElements, event.deltaY),
        );
        element.removeEventListener("touchmove", (event: TouchEvent) => {
          event.preventDefault();
          handleScrolling(index, sectionElements, event.touches[0].clientY);
        });
      });
    };
  }, [handleScrolling]);

  return <div className="absolute"></div>;
};

export default HandleScroll;
