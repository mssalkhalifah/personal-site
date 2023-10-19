"use client";

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface ISidebar {
  isOpen: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ isOpen }): JSX.Element => {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate("#sidebar", isOpen ? { x: 0 } : { x: "-100%" }, {
      duration: 0.3,
      type: "tween",
    });

    animate("li", isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, {
      duration: 0.2,
      delay: isOpen ? staggerMenuItems : 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div ref={scope}>
      <div
        id="sidebar"
        className="block absolute top-0 h-screen w-[75%] bg-gray-300 shadow-md sm:hidden"
      >
        <ul className="pt-20 mx-6 space-y-4 flex flex-col">
          <li>PROJECTS</li>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
