"use client";

import { motion } from "framer-motion";
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
  const canScroll = useRef<boolean>(true);
  const touchThreshhold = 100;
  const scrollThreshhold = 5;
  const [totalSections, setTotalSections] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

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

      if (
        (direction > 0 && direction <= touchThreshhold) ||
        (direction < 0 && direction >= -touchThreshhold)
      ) {
        direction = 0;
      }
    } else {
      if (
        (direction > 0 && direction <= scrollThreshhold) ||
        (direction < 0 && direction >= -scrollThreshhold)
      ) {
        direction = 0;
      }
    }

    if (direction > 0 && nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index + 1);
    }

    if (direction < 0 && prevElement) {
      prevElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index - 1);
    }

    touchStartY.current = 0;
  };

  const handleScrolling = useThrottle(
    (index: number, elements: NodeListOf<HTMLElement>, direction: number) => {
      if (!isScrolling.current && canScroll.current) {
        handleScroll(index, elements, direction);
        isScrolling.current = true;
      }
    },
    600,
    [],
  );

  useEffect(() => {
    const mainDiv = document.getElementById("mainDiv");

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          mainDiv
        ) {
          console.log("Has Sidebar: ", mainDiv.classList.contains("sidebar"));
          canScroll.current = !mainDiv.classList.contains("sidebar");
        }
      }
    });

    if (mainDiv) {
      const observerConfig: MutationObserverInit = {
        attributes: true,
        attributeFilter: ["class"],
        subtree: false,
      };

      observer.observe(mainDiv, observerConfig);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.querySelector("body")!.classList.add("overscroll-none");

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

    window.addEventListener("wheel", () => endScrolling());
    window.addEventListener("touchend", () => endScrolling());

    const sectionElements = document.querySelectorAll("section");
    setTotalSections(sectionElements.length);

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
      document.querySelector("body")!.classList.remove("overscroll-none");
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

  return (
    <div className="absolute flex flex-col justify-center place-items-end right-0 top-0 bottom-0 z-50">
      {Array.from(Array(totalSections), (_, index) => {
        return (
          <motion.div
            layout
            key={index}
            className={`w-2 bg-black m-1 rounded-full overflow-hidden dark:bg-zinc-700 ${
              currentSection === index ? "h-7" : "h-4"
            }`}
          ></motion.div>
        );
      })}
    </div>
  );
};

export default HandleScroll;
