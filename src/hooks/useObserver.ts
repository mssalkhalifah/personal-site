import React, { useCallback } from "react";
import { useEffect, useRef } from "react";

function useObserver(
  handler: (entries: IntersectionObserverEntry[]) => void,
  rootMargin?: string,
  threshold?: number
): [
  React.RefObject<IntersectionObserver>,
  React.RefObject<HTMLDivElement>,
  (node: HTMLDivElement) => void,
  React.MutableRefObject<HTMLDivElement[]>
] {
  const parentRef = React.createRef<HTMLDivElement>();
  const childRefs = useRef<HTMLDivElement[]>([]);
  const observer = useRef<IntersectionObserver>(null);

  const addNode = useCallback((node: HTMLDivElement) => {
    childRefs.current.push(node);
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const getObserver = (
      ref: React.MutableRefObject<IntersectionObserver | null>
    ) => {
      const observer = ref.current;

      if (observer !== null) {
        return observer;
      }

      const newObserver = new IntersectionObserver(handler, {
        root: parentRef.current,
        rootMargin: rootMargin,
        threshold: threshold,
      });

      ref.current = newObserver;

      return newObserver;
    };

    const newObserver = getObserver(observer);

    childRefs.current.forEach((ref) => observer.current?.observe(ref));

    return () => newObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [observer, parentRef, addNode, childRefs];
}

export default useObserver;
