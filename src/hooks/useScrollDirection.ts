import { useEffect, useState } from "react";

interface ScrollDirection {
  isScrollingUp: boolean;
  isScrollingDown: boolean;
}

const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>({
    isScrollingUp: false,
    isScrollingDown: false,
  });

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const isScrollingUp = event.deltaY < 0;
      const isScrollingDown = event.deltaY > 0;

      setScrollDirection({
        isScrollingUp,
        isScrollingDown,
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
