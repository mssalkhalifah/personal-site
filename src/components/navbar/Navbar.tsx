"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface INavbar {}

const Navbar: React.FC<INavbar> = ({}) => {
  const [isTop, setTop] = useState(true);
  const [isProjectsPage, setProjectsPage] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  useEffect(() => {
    setTop(scrollPosition === 0);
    const isCurrentPathHome = pathname?.split("/");

    setProjectsPage(isCurrentPathHome && isCurrentPathHome[1] === "projects");
  }, [pathname, scrollPosition]);

  return (
    <nav
      className={`fixed z-[100] transition-all ${
        isTop
          ? "bg-transparent w-full"
          : "bg-gray-400/50 backdrop-blur rounded-full mt-2 mx-[5%] w-[90%]"
      }`}
    >
      <div className="container mx-auto py-2">
        <div className="flex place-items-center">
          <Link href={"/"}>
            <span className="text-black text-3xl">M</span>
            <span className="text-xl">ssalkhalifah</span>
          </Link>
          <Link href={"projects"}>
            <span
              className={`mx-6 w-10 px-2 py-1 transition-all ${
                isProjectsPage
                  ? "bg-gray-400 rounded-md"
                  : "bg-gray-100 rounded-xl"
              }`}
            >
              PROJECTS
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
