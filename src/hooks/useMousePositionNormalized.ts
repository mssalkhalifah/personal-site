import { useEffect, useState } from "react";

interface IMousePosition {
  x: number;
  y: number;
}

const useMousePositionNormalized = (id?: string): IMousePosition => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: window.outerWidth,
    y: window.outerHeight,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const htmlElement = event.target as HTMLElement;

      if (
        htmlElement &&
        typeof htmlElement.getBoundingClientRect === "function"
      ) {
        const boundingRect = htmlElement.getBoundingClientRect();

        if (id) {
          if (htmlElement.id === id) {
            const x =
              ((event.x - boundingRect.left) / boundingRect.width) * 2 - 1;
            const y =
              -((event.y - boundingRect.top) / boundingRect.height) * 2 + 1;
            setMousePosition({ x, y });
          }
        } else {
          const x =
            ((event.x - boundingRect.left) / boundingRect.width) * 2 - 1;
          const y =
            -((event.y - boundingRect.top) / boundingRect.height) * 2 + 1;
          setMousePosition({ x, y });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [id]);

  return mousePosition;
};

export default useMousePositionNormalized;
