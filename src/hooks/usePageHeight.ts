import { useEffect, useState } from "react";

const usePageHeight = (): number => {
  const [pageHeight, setPageHeight] = useState<number>(0);

  const calculatePageHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    setPageHeight(height);
  };

  useEffect(() => {
    calculatePageHeight();

    const handleResize = () => {
      calculatePageHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means the effect runs once after mount

  return pageHeight;
};

export default usePageHeight;
