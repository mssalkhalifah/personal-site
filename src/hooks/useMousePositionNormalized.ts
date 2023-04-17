import { useEffect, useState } from "react";

interface IMousePosition {
  x: number;
  y: number;
}

const useMousePositionNormalized = (): IMousePosition => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const boundingRect = (
        event.target as HTMLElement
      ).getBoundingClientRect();
      const x = ((event.x - boundingRect.left) / boundingRect.width) * 2 - 1;
      const y = -((event.y - boundingRect.top) / boundingRect.height) * 2 + 1;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePositionNormalized;
