"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import profile from "../../../public/Profile.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMiniQueueList } from "react-icons/hi2";
import Sidebar from "./side/SideBar";

export interface INavbar {}

const Navbar: React.FC<INavbar> = ({}) => {
  const [isTop, setTop] = useState(true);
  const [isProjectsPage, setProjectsPage] = useState(false);
  const [isDropdownClicked, setDropdownClicked] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  useEffect(() => {
    setTop(scrollPosition === 0);
    const isCurrentPathHome = pathname?.split("/");

    setProjectsPage(isCurrentPathHome && isCurrentPathHome[1] === "projects");
  }, [pathname, scrollPosition]);

  return (
    <nav
      id="navbar"
      className={`fixed z-[100] transition-all ${
        isTop
          ? "bg-transparent w-screen"
          : "bg-gray-300/50 w-screen backdrop-blur sm:rounded-full sm:mt-2 sm:mx-[3%] sm:w-[94%]"
      }`}
    >
      <div className="container mx-auto py-2">
        <div className="flex place-items-center mx-2">
          <Image
            className="block rounded-xl shadow-md sm:hidden z-50"
            src={profile}
            alt={"profile"}
            width={50}
            height={50}
          />
          <Link href={"/"} className="mx-auto z-50 sm:mx-0">
            <span className="text-black text-3xl">M</span>
            <span className="text-xl">ssalkhalifah</span>
          </Link>
          <Link href={"/projects"}>
            <span
              className={`hidden mx-6 w-fit px-2 py-1 transition-all sm:block ${
                isProjectsPage
                  ? "bg-gray-400 rounded-md"
                  : "bg-gray-100 rounded-xl"
              }`}
            >
              PROJECTS
            </span>
          </Link>
          <button
            onClick={() => setDropdownClicked(!isDropdownClicked)}
            className="block p-2 bg-gray-50 shadow-md w-[50px] h-[50px] z-50 rounded-xl sm:hidden"
          >
            <HiMiniQueueList className="mx-auto w-[25px] h-[25px]" />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isDropdownClicked} />
    </nav>
  );
};

export default Navbar;
