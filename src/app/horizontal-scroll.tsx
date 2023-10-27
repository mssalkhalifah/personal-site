"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IHorizontalDiv {
  children: React.ReactNode;
}

const HorizontalDiv: React.FC<IHorizontalDiv> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCanScroll(true);
      } else {
        setCanScroll(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize, true);

    return () => window.removeEventListener("resize", handleResize, true);
  }, []);

  return (
    <div
      ref={contentRef}
      className="overflow-hidden py-5 w-screen lg:w-fit lg:mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "tween" }}
        drag={canScroll && "x"}
        dragConstraints={contentRef}
        className="flex space-x-4 px-5 w-fit"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalDiv;
