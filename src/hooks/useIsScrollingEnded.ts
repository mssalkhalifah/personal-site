import { useEffect, useState } from "react";

const useIsScrollingEnded = (): boolean => {
  const [isScrollEnded, setIsScrollEnded] = useState(true);

  useEffect(() => {
    const handleEndScroll = () => setIsScrollEnded(true);
    const handleStartScroll = () => setIsScrollEnded(false);

    window.addEventListener("scrollend", () => handleEndScroll);
    window.addEventListener("scroll", () => handleStartScroll);

    return () => {
      window.removeEventListener("scrollend", () => handleEndScroll);
      window.removeEventListener("scroll", () => handleStartScroll);
    };
  }, [isScrollEnded]);

  return isScrollEnded;
};

export default useIsScrollingEnded;
