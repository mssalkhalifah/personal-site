import { useRef } from "react";

function useThrottleFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
) {
  const lastExecTime = useRef<number>(0);

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime.current > delay) {
      lastExecTime.current = currentTime;
      return fn(...args);
    }

    return undefined; // Optional: You may choose to return something specific in case of throttling.
  };
}

export default useThrottleFn;
